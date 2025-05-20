const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;

// Initialize Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// Handle graceful shutdown
let isShuttingDown = false;
const connections = {};
let connectionCounter = 0;

// Prepare Next.js
app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      // Parse URL
      const parsedUrl = parse(req.url, true);
      
      // Let Next.js handle the request
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  });

  // Track connections
  server.on('connection', (conn) => {
    const id = connectionCounter++;
    connections[id] = conn;
    
    conn.on('close', () => {
      delete connections[id];
    });
  });

  // Start server
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });

  // Graceful shutdown handler
  const handleShutdown = () => {
    if (isShuttingDown) return;
    isShuttingDown = true;

    console.log('Shutting down server gracefully...');
    
    // Close server to stop accepting new connections
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });

    // Close existing connections
    Object.keys(connections).forEach((key) => {
      connections[key].destroy();
    });

    // Force close after timeout
    setTimeout(() => {
      console.log('Could not close connections in time, forcefully shutting down');
      process.exit(1);
    }, 5000);
  };

  // Handle termination signals
  process.on('SIGTERM', handleShutdown);
  process.on('SIGINT', handleShutdown);
  process.on('uncaughtException', (err) => {
    console.error('Uncaught exception:', err);
    handleShutdown();
  });
}).catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1);
});