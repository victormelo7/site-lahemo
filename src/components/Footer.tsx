// src/components/Footer.tsx
import Link from "next/link";
import { Instagram } from "lucide-react"; // Usando o ícone que já instalamos
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. Logo e Descrição */}
            <div className="space-y-4">
            <Link href="/">
                <Image
                src="/logo-lahemo-circular.png" // O nome do arquivo na pasta 'public'
                alt="Logo LAHEMO"
                width={100} // Ajuste o tamanho conforme necessário
                height={100}
                />
            </Link>
            <p className="text-gray-400">
                Liga Acadêmica de Hematologia e Hemoterapia.
                <br />
                [Nome da sua Universidade]
            </p>
            </div>

          {/* 2. Links Rápidos */}
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

          {/* 3. Links Sociais */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-400">Siga-nos</h3>
            <div className="mt-4 flex space-x-4">
              <a 
                href="https://www.instagram.com/lahemo.uc" // <-- TROQUE AQUI
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              {/* Adicione mais redes sociais aqui se precisar */}
            </div>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} LAHEMO. Todos os direitos reservados.</p>
          <p className="mt-1">Site desenvolvido por [Seu Nome/Grupo]</p>
        </div>
      </div>
    </footer>
  );
}