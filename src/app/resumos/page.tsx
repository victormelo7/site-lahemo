// src/app/aulas/page.tsx

import Footer from "@/components/Footer"; // Importamos o rodapé
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "@/components/ui/card";
import { PlaySquare, FileText } from "lucide-react"; // Ícones para vídeo e pdf
import Link from "next/link"; // Para o botão "Voltar"

// --- Dados de Exemplo ---
// (Substitua isto pelo seu conteúdo real)
const dadosDasAulas = [
  {
    titulo: "Aula 1: Introdução à Hematopoiese",
    descricao: "Slides e gravação da nossa primeira aula.",
    link: "#", // Coloque o link do Google Drive/YouTube aqui
    tipo: "video" // 'video' ou 'pdf'
  },
  {
    titulo: "Aula 2: Anemias Ferroprivas",
    descricao: "Discussão de casos clínicos e slides da aula.",
    link: "#",
    tipo: "video"
  },
  {
    titulo: "Material: Atlas de Lâminas 1",
    descricao: "PDF complementar com o atlas de lâminas da Aula 2.",
    link: "#",
    tipo: "pdf"
  },
  // Adicione mais aulas aqui
];
// -------------------------


export default function PaginaAulas() {
  return (
    <main>
      
      {/* 1. Cabeçalho da Página */}
      {/* Usamos 'z-20' para corrigir o bug do scroll com o Navbar */}
      <div className="w-full bg-gray-50/50 py-16 md:py-24 relative z-20">
        <div className="container mx-auto max-w-5xl px-4">
          <h1 className="text-4xl font-heading font-bold text-lahemo-principal md:text-5xl">
            Resumos
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            
          </p>
          <Link href="/" className="text-sm text-lahemo-terciaria hover:underline mt-4 inline-block">
            &larr; Voltar à página inicial
          </Link>
        </div>
      </div>

      {/* 2. Grelha de Conteúdo */}
      <div className="w-full py-16 md:py-24 bg-white relative z-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Loop pelos dados de exemplo */}
            {dadosDasAulas.map((aula) => (
              <a 
                href={aula.link} 
                key={aula.titulo}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex" // Permite que o card ocupe 100% da altura
              >
                <Card className="flex flex-col justify-between w-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4">
                      {/* Mostra um ícone diferente se for vídeo ou PDF */}
                      {aula.tipo === 'video' ? 
                        <PlaySquare className="h-8 w-8 text-lahemo-terciaria" /> :
                        <FileText className="h-8 w-8 text-lahemo-terciaria" />
                      }
                    </div>
                    <CardTitle className="font-heading">{aula.titulo}</CardTitle>
                    <CardDescription>{aula.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="font-bold text-lahemo-terciaria">
                      Ver Material &rarr;
                    </span>
                  </CardContent>
                </Card>
              </a>
            ))}
            
          </div>
        </div>
      </div>

      {/* 3. Rodapé */}
      <Footer />
    </main>
  );
}