import { Inter } from 'next/font/google';
import './globals.css';
import { userData } from '../config/userData';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: userData.seo.title,
  description: userData.seo.description,
  keywords: userData.seo.keywords,
  authors: [{ name: userData.name }],
  openGraph: {
    title: userData.seo.title,
    description: userData.seo.description,
    url: userData.social.website,
    siteName: userData.name,
    images: [
      {
        url: userData.seo.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: userData.seo.title,
    description: userData.seo.description,
    images: [userData.seo.ogImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}