import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { RpgProvider } from '@/providers/rpg-provider';
import { LoadingProvider } from '@/providers/loading-provider';
import GuideCompanion from '@/components/rpg/companion/guide-companion';
import Footer from '@/components/rpg/layout/footer';
import { Inter } from 'next/font/google';
import { Toaster as HotToaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'Bhargav Adepu - Full Stack Developer',
  description: 'Portfolio of Bhargav Adepu - A Full Stack Developer crafting digital realms with React, Node.js, and AI.',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/apple-icon.png',
        type: 'image/png',
        sizes: '180x180',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Cinzel:wght@400;500;600;700&family=IM+Fell+English:ital@0;1&family=MedievalSharp&family=Pirata+One&family=Spectral:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <div className="fantasy-overlay"></div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>
            <RpgProvider>
              <div className="relative z-10 flex min-h-screen flex-col">
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
                <GuideCompanion />
                <Toaster />
              </div>
            </RpgProvider>
          </LoadingProvider>
        </ThemeProvider>
        <HotToaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: '#2c3e50',
              color: '#fff',
              border: '2px solid #e74c3c',
              borderRadius: '8px',
              padding: '16px',
            },
            success: {
              iconTheme: {
                primary: '#2ecc71',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#e74c3c',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}