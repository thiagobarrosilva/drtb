import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header'; // Import the new Header
// import Footer from '@/components/layout/Footer'; // Placeholder for Footer import

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dr. Thiago Barros - Cardiologista de Excelência em São José dos Campos',
  description: 'Cardiologista especialista em arritmias, Dr. Thiago Barros oferece atendimento humanizado, sofisticado e de excelência em São José dos Campos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-lato bg-gray-100 text-gray-800 antialiased">
        <Header />
        <main className="pt-16"> {/* Add padding top to avoid overlap with fixed header */}
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}

