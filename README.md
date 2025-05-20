# Bhargav Adepu - RPG Portfolio

A modern, interactive portfolio website built with Next.js, featuring an RPG theme that showcases my journey as a Full Stack Developer.

## 🚀 Features

- **RPG-Themed Design**: Interactive UI with game-like elements
- **Dynamic Timeline**: Chronological view of achievements and experiences
- **Interactive Skills Tree**: Visual representation of technical skills
- **Project Showcase**: Featured projects with detailed information
- **Achievement System**: Track and display professional accomplishments
- **Contact System**: MongoDB-powered contact form with email notifications
- **Newsletter Subscription**: Email subscription system with MongoDB storage
- **Responsive Design**: Fully responsive layout for all devices
- **Dark Mode**: Built-in dark mode support
- **Performance Optimized**: Fast loading and smooth animations

## 🛠️ Tech Stack

- **Frontend**:
  - Next.js 14
  - React
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - Lucide Icons

- **Backend**:
  - Next.js API Routes
  - MongoDB
  - Mongoose
  - Nodemailer

- **Styling**:
  - Tailwind CSS
  - Custom RPG-themed components
  - Responsive design
  - Dark mode support

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```env
   # MongoDB
   MONGODB_URI=your_mongodb_connection_string

   # Email (Gmail)
   EMAIL_USER=your_gmail_address
   EMAIL_PASS=your_app_specific_password
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### MongoDB Setup
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Add it to `.env.local`

### Email Setup
1. Use a Gmail account
2. Enable 2-factor authentication
3. Generate an App Password
4. Add credentials to `.env.local`

## 📁 Project Structure

```
├── app/                 # Next.js app directory
│   ├── api/            # API routes
│   ├── components/     # React components
│   └── lib/           # Utility functions
├── models/             # MongoDB models
├── public/            # Static assets
└── styles/            # Global styles
```

## 🎮 Features in Detail

### RPG Elements
- Character profile
- Skill tree visualization
- Achievement system
- Quest log
- Timeline navigation

### Contact System
- MongoDB storage
- Email notifications
- Form validation
- Success/error handling

### Newsletter
- MongoDB storage
- Email confirmations
- Duplicate prevention
- Subscription management

## 🚀 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Bhargav Adepu**
- Portfolio: [Your Portfolio URL]
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- MongoDB for the database solution
- All contributors and supporters 