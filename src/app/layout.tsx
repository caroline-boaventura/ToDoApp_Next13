import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import ThemeRegistry from './components/ThemeRegistry/ThemeRegistry';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'To-Do App',
  description: 'By Caroline Boaventura',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={nunito.variable}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
