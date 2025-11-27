
import Link from "next/link";
import { Instagram } from "lucide-react";
import { GithubIcon } from "lucide-react"; 
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-lahemo-principal text-lahemo-secundaria">
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            <div className="space-y-4">
            <Link href="/">
                <Image
                src="/logo-lahemo-circular.png"
                alt="Logo LAHEMO"
                width={100}
                height={100}
                />
            </Link>
            <p className="text-lahemo-secundaria text-sm">
                <br/>
                Liga Acadêmica de Hematologia e Hemoterapia.
                <br />
                Centro Universitário Unichristus
            </p>
            </div>

          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-400">Navegação</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#sobre" className="hover:text-white">Sobre Nós</Link>
              </li>
              <li>
                <Link href="#membros" className="hover:text-white">Membros</Link>
              </li>
              <li>
                <Link href="/aulas" className="hover:text-white">Conteúdos</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-400">Siga-nos</h3>
            <div className="mt-4 flex space-x-4">
              <a 
                href="https://www.instagram.com/lahemo.uc"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lahemo-secundaria hover:text-white"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-lahemo-secundaria-500 pt-8 text-center text-sm text-lahemo-secundaria">
          <p>&copy; {new Date().getFullYear()} LAHEMO. Todos os direitos reservados.</p>
          <p className="mt-1">
            Site desenvolvido por Victor Melo{" "}
            <a 
              href="https://github.com/victormelo7"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-lahemo-secundaria hover:text-white ml-2"
              aria-label="GitHub de Victor Melo"
            >
              <GithubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </p>
        </div>  
      </div>
    </footer>
  );
}