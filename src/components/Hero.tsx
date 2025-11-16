// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Componente auxiliar para o texto que se repete na animação
const MarqueeText = () => (
  <span className="text-6xl font-heading font-bold text-lahemo-terciaria/10 whitespace-nowrap px-4">
    LAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMO 
    LAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMO
  </span>
);

export default function Hero() {
  return (
    // 1. A <section> (O fundo principal)
    <section className="relative flex min-h-[calc(100vh-65px)] items-center justify-center overflow-hidden bg-lahemo-principal">
      
      {/* Este contentor 'absolute inset-0' preenche todo o fundo.
        'z-0' garante que fica atrás do nosso conteúdo (que tem 'z-10').
        'flex-col' empilha as linhas de texto verticalmente.
      */}
      <div className="absolute inset-0 z-0 flex flex-col">
        {/* Linha 1 (Esquerda -> Direita) */}
        <div className="w-full flex animate-scroll-ltr">
          <MarqueeText /><MarqueeText />
        </div>
        {/* Linha 2 (Direita -> Esquerda) */}
        <div className="w-full flex animate-scroll-rtl">
          <MarqueeText /><MarqueeText />
        </div>
        {/* Linha 3 (Esquerda -> Direita) */}
        <div className="w-full flex animate-scroll-ltr">
          <MarqueeText /><MarqueeText />
        </div>
        {/* Linha 4 (Direita -> Esquerda) */}
        <div className="w-full flex animate-scroll-rtl">
          <MarqueeText /><MarqueeText />
        </div>
        {/* Linha 5 (Esquerda -> Direita) */}
        <div className="w-full flex animate-scroll-ltr">
          <MarqueeText /><MarqueeText />
        </div>
        {/* Linha 6 (Direita -> Esquerda) */}
        <div className="w-full flex animate-scroll-rtl">
          <MarqueeText /><MarqueeText />
        </div>
        {/* Linha 7 (Esquerda -> Direita) */}
        <div className="w-full flex animate-scroll-ltr">
          <MarqueeText /><MarqueeText />
        </div>
        {/* Linha 8 (Direita -> Esquerda) */}
        <div className="w-full flex animate-scroll-rtl">
          <MarqueeText /><MarqueeText />
        </div>
        {/* Linha 9 (Esquerda -> Direita) */}
        <div className="w-full flex animate-scroll-ltr">
          <MarqueeText /><MarqueeText />
        </div>
        {/* Linha 10 (Direita -> Esquerda) */}
        <div className="w-full flex animate-scroll-rtl">
          <MarqueeText /><MarqueeText />
        </div>
         <div className="w-full flex animate-scroll-rtl">
          <MarqueeText /><MarqueeText />
        </div>
      </div>

      {/* 2. Conteúdo Principal (Centralizado) */}
      {/* Este 'z-10' garante que o título e os botões ficam ACIMA da animação */}
      <div className="relative z-10 container mx-auto max-w-5xl px-4 py-20 text-center">
        
        {/* Título Principal */}
        <h1 className="text-4xl font-bold tracking-tight text-lahemo-secundaria md:text-6xl font-heading">
          Liga Acadêmica de Hematologia e Hemoterapia
        </h1>
        
        {/* Subtítulo */}
        <p className="mt-6 text-lg leading-8 text-lahemo-secundaria/80 md:text-xl">
        </p>
        
        {/* Botões de Ação */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="#sobre">Saiba Mais</Link>
          </Button>
        </div>
        
      </div>

    </section>
  );
}