// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Componente auxiliar para o texto que se repete
// Usamos o vermelho terciário (brilhante) com 10% de opacidade
const MarqueeText = () => (
  <span className="text-6xl font-heading font-bold text-lahemo-terciaria/10 whitespace-nowrap px-4">
  LAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMO
  </span>
);

export default function Hero() {
  return (
    // 1. A <section> agora é relativa, sem overflow, e com o fundo de cor principal
    <section className="relative flex min-h-[calc(100vh-65px)] items-center justify-center overflow-hidden bg-lahemo-principal">
      
      {/* --- Fundo Animado (Topo) --- */}
      {/* Animação da Esquerda para a Direita (conforme o pedido) */}
      <div className="absolute top-0 left-0 w-full flex animate-scroll-ltr">
        <MarqueeText />
        <MarqueeText /> {/* Duplicamos para a animação ficar contínua */}
      </div>

      {/* 2. Conteúdo Principal (Centralizado) */}
      {/* Adicionamos relative e z-10 para ficar ACIMA das animações */}
      <div className="relative z-10 container mx-auto max-w-5xl px-4 py-20 text-center">
        
        {/* Título Principal (CORRIGIDO PARA BRANCO) */}
        <h1 className="text-4xl font-bold tracking-tight text-lahemo-secundaria md:text-6xl font-heading">
          Liga Acadêmica de Hematologia e Hemoterapia
        </h1>
        
        {/* Subtítulo (CORRIGIDO PARA BRANCO SUAVE) */}
        <p className="mt-6 text-lg leading-8 text-lahemo-secundaria/80 md:text-xl">
          {/*Conectando o tripé acadêmico: Ensino, Pesquisa e Extensão 
          na vanguarda da Hematologia.*/}
        </p>
        
        {/* Botões de Ação */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {/* Botão Primário (vermelho) - já está correto pela cor primária do tema */}
          <Button asChild size="lg">
            <Link href="#sobre">Saiba Mais</Link>
          </Button>
          {/* Botão Secundário (contorno BRANCO) */}

          {/*<Button asChild variant="outline" size="lg" className="border-lahemo-secundaria text-lahemo-secundaria hover:bg-lahemo-secundaria hover:text-lahemo-principal">
            <Link href="#membros">Nossa Equipe</Link>
          </Button>
          */}

        </div>
        
      </div>

      {/* --- Fundo Animado (Rodapé) --- */}
      {/* Animação da Direita para a Esquerda (conforme o pedido) */}
      <div className="absolute bottom-0 left-0 w-full flex animate-scroll-rtl">
        <MarqueeText />
        <MarqueeText /> {/* Duplicamos para a animação ficar contínua */}
      </div>

    </section>
  );
}