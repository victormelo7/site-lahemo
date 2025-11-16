// src/components/Navbar.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
// Imports do Menu de Telemóvel
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
// --- 1. IMPORTS NOVOS (ACCORDION) ---
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu } from "lucide-react";
// Fim dos Imports
import { cn } from "@/lib/utils";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 bg-lahemo-principal shadow-sm z-[100]">
      <div className="container mx-auto max-w-5xl px-4 py-3 flex justify-between items-center">
        
        {/* 1. LOGO */}
        <Link href="/">
          <Image
            src="/logo-lahemo-branco.png"
            alt="Logo LAHEMO"
            width={140} 
            height={40} 
            priority 
          />
        </Link>
        {/* --- FIM DO LOGO --- */}
        
        {/* 2. LINKS DE NAVEGAÇÃO (DESKTOP) */}
        <div className="hidden md:flex space-x-6 items-center">
          
          <Link 
            href="/#sobre" 
            className="text-lahemo-secundaria hover:text-gray-300 transition-colors"
          >
            Sobre
          </Link>
          <Link 
            href="#membros" 
            className="text-lahemo-secundaria hover:text-gray-300 transition-colors"
          >
            Membros
          </Link>

          {/* Dropdown "Conteúdos" */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className="text-base bg-lahemo-principal text-lahemo-secundaria hover:bg-lahemo-principal hover:text-gray-300 focus:bg-lahemo-principal"
                >
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
          
          <Button>Processo Seletivo</Button>
        </div>

        {/* --- 3. MENU HAMBÚRGUER (TELEMÓVEL) --- */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {/* Ícone de Menu (branco) */}
                <Menu className="h-6 w-6 text-lahemo-secundaria" />
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="bg-lahemo-principal text-lahemo-secundaria border-l-0 w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-lahemo-secundaria font-heading">Navegação</SheetTitle>
              </SheetHeader>
              
              {/* Links estilizados como botões 'ghost' */}
              <div className="flex flex-col gap-2 py-4">
                <SheetClose asChild>
                  <Button asChild variant="ghost" className="justify-start text-lg hover:bg-lahemo-terciaria/20 hover:text-lahemo-secundaria">
                    <Link href="/#sobre">Sobre</Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild variant="ghost" className="justify-start text-lg hover:bg-lahemo-terciaria/20 hover:text-lahemo-secundaria">
                    <Link href="#membros">Membros</Link>
                  </Button>
                </SheetClose>
                
                {/* ---- MUDANÇA AQUI: CONTEÚDOS COMO ACCORDION ---- */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b-0">
                    {/* 1. O Botão Clicável "Conteúdos" */}
                    <AccordionTrigger className="justify-start text-lg font-normal hover:bg-lahemo-terciaria/20 hover:text-lahemo-secundaria hover:no-underline p-4 rounded-md">
                      Conteúdos
                    </AccordionTrigger>
                    {/* 2. A Lista que Abre */}
                    <AccordionContent>
                      <div className="flex flex-col gap-2 pl-8">
                        <SheetClose asChild>
                          <Button asChild variant="ghost" className="justify-start pl-4 hover:bg-lahemo-terciaria/20 hover:text-lahemo-secundaria">
                            <Link href="/aulas">Aulas</Link>
                          </Button>
                        </SheetClose>
                        <SheetClose asChild>
                          <Button asChild variant="ghost" className="justify-start pl-4 hover:bg-lahemo-terciaria/20 hover:text-lahemo-secundaria">
                            <Link href="/resumos">Resumos</Link>
                          </Button>
                        </SheetClose>
                        <SheetClose asChild>
                          <Button asChild variant="ghost" className="justify-start pl-4 hover:bg-lahemo-terciaria/20 hover:text-lahemo-secundaria">
                            <Link href="/questoes">Questões</Link>
                          </Button>
                        </SheetClose>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                {/* ---- FIM DA MUDANÇA ---- */}


                {/* Botão principal com largura total (w-full) */}
                <div className="pt-6">
                  <Button className="w-full">Processo Seletivo</Button>
                </div>
              </div>

            </SheetContent>
          </Sheet>
        </div>
        {/* --- FIM DO MENU DE TELEMÓVEL --- */}

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