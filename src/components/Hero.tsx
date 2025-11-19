import { Button } from "@/components/ui/button";
import Link from "next/link";

const MarqueeText = () => (
  <span className="text-6xl font-heading font-bold text-lahemo-terciaria/10 whitespace-nowrap px-4">
    LAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMO 
    LAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMOLAHEMO
  </span>
);

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-65px)] items-center justify-center overflow-hidden bg-lahemo-principal">
      <div className="absolute inset-0 z-0 flex flex-col">
        <div className="w-full flex animate-scroll-ltr">
          <MarqueeText /><MarqueeText />
        </div>

        <div className="w-full flex animate-scroll-rtl">
          <MarqueeText /><MarqueeText />
        </div>

        <div className="w-full flex animate-scroll-ltr">
          <MarqueeText /><MarqueeText />
        </div>

        <div className="w-full flex animate-scroll-rtl">
          <MarqueeText /><MarqueeText />
        </div>

        <div className="w-full flex animate-scroll-ltr">
          <MarqueeText /><MarqueeText />
        </div>
        
        <div className="w-full flex animate-scroll-rtl">
          <MarqueeText /><MarqueeText />
        </div>
        
        <div className="w-full flex animate-scroll-ltr">
          <MarqueeText /><MarqueeText />
        </div>
        
        <div className="w-full flex animate-scroll-rtl">
          <MarqueeText /><MarqueeText />
        </div>
        
        <div className="w-full flex animate-scroll-ltr">
          <MarqueeText /><MarqueeText />
        </div>

        <div className="w-full flex animate-scroll-rtl">
          <MarqueeText /><MarqueeText />
        </div>

         <div className="w-full flex animate-scroll-rtl">
          <MarqueeText /><MarqueeText />
        </div>

        <div className="w-full flex animate-scroll-rtl">
          <MarqueeText /><MarqueeText />
        </div>

        <div className="w-full flex animate-scroll-rtl">
          <MarqueeText /><MarqueeText />
        </div>

        <div className="w-full flex animate-scroll-rtl">
          <MarqueeText /><MarqueeText />
        </div>

        <div className="w-full flex animate-scroll-rtl">
          <MarqueeText /><MarqueeText />
        </div>

        <div className="w-full flex animate-scroll-rtl">
          <MarqueeText /><MarqueeText />
        </div>

        <div className="w-full flex animate-scroll-rtl">
          <MarqueeText /><MarqueeText />
        </div>
      </div>

      <div className="relative z-10 container mx-auto max-w-5xl px-4 py-20 text-center">
        
        <h1 className="text-4xl font-bold tracking-tight text-lahemo-secundaria md:text-6xl font-heading">
          Liga Acadêmica de Hematologia e Hemoterapia
        </h1>
        
        <p className="mt-6 text-lg leading-8 text-lahemo-secundaria/80 md:text-xl">
        </p>
        
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="#sobre">Saiba Mais</Link>
          </Button>
        </div>
        
      </div>

    </section>
  );
}