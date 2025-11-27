import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "LAHEMO",
  description: "Liga Acadêmica de Hematologia e Hemoterapia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${lato.variable} ${montserrat.variable} font-sans`}> 
        <Navbar />
        {children}
      </body>
    </html>
  );
}