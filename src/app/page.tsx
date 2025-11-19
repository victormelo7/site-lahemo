import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Membros from "@/components/Membros";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Membros />
      <Footer />
    </main>
  );
}