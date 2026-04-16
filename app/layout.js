import './globals.css';

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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
