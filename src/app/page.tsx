// src/app/page.tsx
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Membros from "@/components/Membros";
import Footer from "@/components/Footer";

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