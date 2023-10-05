import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio',
  description: 'Sirazus Salekin Chowdhury',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-slate-900 text-white ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
