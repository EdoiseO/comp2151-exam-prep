import './globals.css';
import {JetBrains_Mono, Manrope} from 'next/font/google';

const headingFont = Manrope({
  subsets: ['latin'],
  variable: '--font-heading'
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
});

export const metadata = {
  title: 'COMP2151 Exam Prep',
  description: 'Practice by lecture, retry missed questions, and build toward a full exam review set.',
  applicationName: 'COMP2151 Exam Prep'
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#f5f5f5'
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${monoFont.variable}`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
