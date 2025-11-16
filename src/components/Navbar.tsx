// src/components/Navbar.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image'; // <-- 1. IMPORTE O 'Image' AQUI
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 bg-lahemo-principal border-b border-lahemo-terciaria shadow-sm z-50">
      <div className="container mx-auto max-w-5xl px-4 py-3 flex justify-between items-center">
        
        {/* --- 1. LOGO (AGORA COMO IMAGEM) --- */}
        <Link href="/">
          <Image
            src="/logo-lahemo.png" // <-- 2. O CAMINHO DO SEU ARQUIVO NA PASTA 'public'
            alt="Logo LAHEMO"
            width={140} // <-- 3. AJUSTE A LARGURA (em pixels)
            height={40} // <-- 4. AJUSTE A ALTURA (em pixels)
            priority // Faz o logo carregar mais rápido
          />
        </Link>
        {/* --- FIM DO LOGO --- */}
        
        {/* 2. Links de Navegação */}
        <div className="hidden md:flex space-x-6 text-gray-700 items-center">
          
          <Link href="/#sobre" className="hover:text-lahemo-terciaria transition-colors">
            Sobre
          </Link>
          <Link href="/#membros" className="hover:text-lahemo-terciaria transition-colors">
            Membros
          </Link>

          {/* Dropdown "Conteúdos" */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">
                  Conteúdos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-rows-2 lg:w-[125px] ">
                    <ListItem href="/aulas" title="Aulas"></ListItem>
                    <ListItem href="/resumos" title="Resumos"></ListItem>
                    <ListItem href="/questoes" title="Questões"></ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          {/* 3. Botão de Ação */}
          <Button>Processo Seletivo</Button>
        </div>

      </div>
    </nav>
  );
}

// Componente auxiliar ListItem
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";