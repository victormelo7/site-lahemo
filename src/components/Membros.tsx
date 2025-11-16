// src/components/Membros.tsx
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// --- NOVAS LISTAS SEPARADAS ---

// (Você pode preencher com os nomes reais quando quiser)
const presidencia = [
  { nome: "Beatriz Cidrão", cargo: "Presidente" },
  { nome: "Amanda Amaral", cargo: "Presidente" },
];

const ensino = [
  { nome: "Anna Rabb", cargo: "Diretor(a) de Ensino" },
  { nome: "Felipe Gomes", cargo: "Diretor(a) de Ensino" },
  { nome: "Fernando Duarte", cargo: "Diretor(a) de Ensino" },
  { nome: "Maria Luiza Matias", cargo: "Diretor(a) de Ensino" },
  // Adicione mais membros de ensino aqui...
];

const pesquisa = [
  { nome: "Mariana Chaves", cargo: "Diretor(a) de Pesquisa" },
  { nome: "Anna Rabb", cargo: "Diretor(a) de Pesquisa" },
];

const extensao = [
  { nome: "Amanda Amaral", cargo: "Diretor(a) de Extensão" },
  { nome: "Beatriz Cidrão", cargo: "Diretor(a) de Extensão" },
  { nome: "Felipe Gomes", cargo: "Diretor(a) de Extensão" },
  { nome: "Maria Luiza Matias", cargo: "Diretor(a) de Extensão" },
  { nome: "Mirella Cabral", cargo: "Diretor(a) de Extensão" },
];

const marketing = [
  { nome: "Mirella Cabral", cargo: "Diretor(a) de Marketing" },
];

// Dados dos Orientadores (com "slug" para o link do perfil) Não Funcional no momento
const orientadores = [
  {
    nome: "Dra. Laís Chaves",
    cargo: "Orientadora",
    //slug: "lais-chaves", // Este é o link: /orientadores/lais-chaves
  },
  {
    nome: "Dr. Rafael de Alencar",
    cargo: "Orientador",
    //slug: "rafael-alencar",
  },
  {
    nome: "Dr. Fernando Barroso",
    cargo: "Orientador",
    //slug: "fernando-barroso",
  },
];

// --- COMPONENTE PRINCIPAL ATUALIZADO ---

export default function Membros() {
  return (
    <section id="membros" className="w-full py-16 md:py-24 bg-gray-50/50">
      <div className="container mx-auto max-w-5xl px-4 space-y-16">
        
        {/* Título Geral */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
            Nossa Equipe
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            Conheça os membros e orientadores que lideram a LAHEMO.
          </p>
        </div>

        {/* --- DIVISÃO: ORIENTADORES (sem links) --- */}
<SubSecaoMembros titulo="Orientadores">
  {orientadores.map((orientador) => (
    // Removemos o <Link> e usamos o MembroCard padrão
    <MembroCard 
      key={orientador.nome} 
      nome={orientador.nome} 
      cargo={orientador.cargo} 
    />
  ))}
</SubSecaoMembros>
        
        {/* --- DIVISÃO: PRESIDÊNCIA --- */}
        <SubSecaoMembros titulo="Presidência">
          {presidencia.map((membro) => (
            <MembroCard key={membro.nome} nome={membro.nome} cargo={membro.cargo} />
          ))}
        </SubSecaoMembros>

        {/* --- DIVISÃO: ENSINO --- */}
        <SubSecaoMembros titulo="Diretoria de Ensino">
          {ensino.map((membro) => (
            <MembroCard key={membro.nome} nome={membro.nome} cargo={membro.cargo} />
          ))}
        </SubSecaoMembros>

        {/* --- DIVISÃO: PESQUISA --- */}
        <SubSecaoMembros titulo="Diretoria de Pesquisa">
          {pesquisa.map((membro) => (
            <MembroCard key={membro.nome} nome={membro.nome} cargo={membro.cargo} />
          ))}
        </SubSecaoMembros>
        
        {/* --- DIVISÃO: EXTENSÃO --- */}
        <SubSecaoMembros titulo="Diretoria de Extensão">
          {extensao.map((membro) => (
            <MembroCard key={membro.nome} nome={membro.nome} cargo={membro.cargo} />
          ))}
        </SubSecaoMembros>

        {/* --- DIVISÃO: MARKETING --- */}
        <SubSecaoMembros titulo="Diretoria de Marketing">
          {marketing.map((membro) => (
            <MembroCard key={membro.nome} nome={membro.nome} cargo={membro.cargo} />
          ))}
        </SubSecaoMembros>

      </div>
    </section>
  );
}

// --- COMPONENTES AUXILIARES ---

// Um Card padrão para membros da diretoria
function MembroCard({ nome, cargo }: { nome: string, cargo: string }) {
  return (
    <Card className="text-center shadow-md">
      <CardHeader>
        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
          {/* Placeholder da foto */}
        </div>
        <CardTitle>{nome}</CardTitle>
        <CardDescription className="text-lahemo-principal font-medium">
          {cargo}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

// Um componente para criar o título e a grade de cada divisão
function SubSecaoMembros({ titulo, children }: { titulo: string, children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-l-4 border-lahemo-principal pl-3 font-heading">
        {titulo}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
}