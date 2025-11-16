// src/app/page.tsx
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Membros from "@/components/Membros"; // <-- 1. IMPORTE AQUI
import Footer from "@/components/Footer"; // <-- 3. IMPORTE AQUI

export default function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Membros /> {/* <-- 2. ADICIONE AQUI */}
      <Footer /> {/* <-- 3. ADICIONE O FOOTER AQUI */}
    </main>
  );
}