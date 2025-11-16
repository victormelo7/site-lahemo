// src/app/layout.tsx

import type { Metadata } from "next";
// 1. Import 'Lato' (corpo) e 'Montserrat' (títulos)
import { Lato, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';

// 2. Configura a Lato como a fonte Padrão (font-sans)
const lato = Lato({ 
  subsets: ["latin"],
  weight: ["400", "700"], // Peso normal e negrito
  variable: "--font-sans", // <-- Define como a fonte 'sans' padrão
});

// 3. Configura a Montserrat como a fonte de Título (font-heading)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"], //(Bold) para títulos
  variable: "--font-heading", // <-- Define como a nova fonte 'heading'
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
      {/* 4. Aplica as DUAS variáveis de fonte ao <body> */}
      <body className={`${lato.variable} ${montserrat.variable} font-sans`}> 
        <Navbar />
        {children}
      </body>
    </html>
  );
}