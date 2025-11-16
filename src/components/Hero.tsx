// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    // 'min-h-screen' faz a seção ocupar a tela inteira (menos o navbar)
    // 'flex' e 'items-center' centralizam o conteúdo verticalmente
    <section className="flex min-h-[calc(100vh-65px)] items-center justify-center bg-gray-50/50">
      <div className="container mx-auto max-w-5xl px-4 py-20 text-center">
        
        {/* Título Principal */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl font-heading">
          Liga Acadêmica de Hematologia e Hemoterapia
        </h1>
        
        {/* Subtítulo */}
        <p className="mt-6 text-lg leading-8 text-gray-700 md:text-xl">
          Conectando o tripé acadêmico: Ensino, Pesquisa e Extensão 
          na vanguarda da Hematologia.
        </p>
        
        {/* Botões de Ação */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="#sobre">Saiba Mais</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#eventos">Nossos Eventos</Link>
          </Button>
        </div>
        
      </div>
    </section>
  );
}