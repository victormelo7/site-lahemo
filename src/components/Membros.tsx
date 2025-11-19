import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const presidencia = [
  { 
    nome: "Beatriz Cidrão", 
    cargo: "Presidente",
    imagemUrl: "/membros/beatriz-cidrao.png"
  },
  { 
    nome: "Amanda Amaral", 
    cargo: "Presidente",
    imagemUrl: "/membros/amanda-amaral.png"
  },
];

const ensino = [
  { nome: "Anna Rabb", cargo: "Ensino", imagemUrl: "/membros/anna-rabb.png" },
  { nome: "Felipe Gomes", cargo: "Ensino", imagemUrl: "/membros/felipe-gomes.png" },
  { nome: "Fernando Duarte", cargo: "Ensino", imagemUrl: "/membros/fernando-duarte.png" },
  { nome: "Maria Luiza Matias", cargo: "Ensino", imagemUrl: "/membros/maria-luiza-matias.png" },
];

const pesquisa = [
  { nome: "Mariana Chaves", cargo: "Pesquisa", imagemUrl: "/membros/mariana-chaves.png" },
  { nome: "Anna Rabb", cargo: "Pesquisa", imagemUrl: "/membros/anna-rabb.png" },
];

const extensao = [
  { nome: "Amanda Amaral", cargo: "Extensão", imagemUrl: "/membros/amanda-amaral.png" },
  { nome: "Beatriz Cidrão", cargo: "Extensão", imagemUrl: "/membros/beatriz-cidrao.png" },
  { nome: "Felipe Gomes", cargo: "Extensão", imagemUrl: "/membros/felipe-gomes.png" },
  { nome: "Maria Luiza Matias", cargo: "Extensão", imagemUrl: "/membros/maria-luiza-matias.png" },
  { nome: "Mirella Cabral", cargo: "Extensão", imagemUrl: "/membros/mirella-cabral.png" },
];

const marketing = [
  { nome: "Mirella Cabral", cargo: "Marketing", imagemUrl: "/membros/mirella-cabral.png" },
];

const orientadores = [
  {
    nome: "Dra. Laís Chaves",
    cargo: "Orientadora",
    slug: "lais-chaves", 
    imagemUrl: "/membros/lais-chaves.png"
  },
  {
    nome: "Rafael de Alencar",
    cargo: "Orientador",
    slug: "rafael-alencar",
    imagemUrl: "/membros/rafael-de-alencar.png"
  },
  {
    nome: "Fernando Barroso",
    cargo: "Orientador",
    slug: "fernando-barroso",
    imagemUrl: "/membros/fernando-barroso.png"
  },
];

export default function Membros() {
  return (
    <section id="membros" className="w-full py-16 md:py-24 bg-gray-50/50 relative z-20">
      <div className="container mx-auto max-w-5xl px-4 space-y-16">
        
        {/* Título Geral */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-lahemo-principal sm:text-4xl font-heading">
            Nossa Equipe
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            Conheça os orientadores e membros da LAHEMO
          </p>  
        </div>
        <SubSecaoMembros titulo="Orientadores">
          {orientadores.map((orientador) => (
            // Futuramente, reativarei o link aqui
            // <Link key={orientador.slug} href={`/orientadores/${orientador.slug}`}>
              <Card key={orientador.nome} className="text-center shadow-md transition-transform hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <Image
                    src={orientador.imagemUrl}
                    alt={orientador.nome}
                    width={96}
                    height={96} 
                    className="rounded-full mx-auto mb-4 object-cover w-24 h-24"
                  />
                  <CardTitle className="font-heading">{orientador.nome}</CardTitle>
                  <CardDescription className="text-lahemo-terciaria font-medium">
                    {orientador.cargo}
                  </CardDescription>
                </CardHeader>
              </Card>
          ))}
        </SubSecaoMembros>
        <SubSecaoMembros titulo="Presidência">
          {presidencia.map((membro) => (
            <CardMembro 
              key={membro.nome} 
              nome={membro.nome} 
              cargo={membro.cargo} 
              imagemUrl={membro.imagemUrl}
            />
          ))}
        </SubSecaoMembros>

        <SubSecaoMembros titulo="Ensino">
          {ensino.map((membro) => (
            <CardMembro 
              key={membro.nome} 
              nome={membro.nome} 
              cargo={membro.cargo} 
              imagemUrl={membro.imagemUrl}
            />
          ))}
        </SubSecaoMembros>
        
        <SubSecaoMembros titulo="Pesquisa">
          {pesquisa.map((membro) => (
            <CardMembro 
              key={membro.nome} 
              nome={membro.nome} 
              cargo={membro.cargo} 
              imagemUrl={membro.imagemUrl}
            />
          ))}
        </SubSecaoMembros>
        
        <SubSecaoMembros titulo="Extensão">
          {extensao.map((membro) => (
            <CardMembro 
              key={membro.nome} 
              nome={membro.nome} 
              cargo={membro.cargo} 
              imagemUrl={membro.imagemUrl}
            />
          ))}
        </SubSecaoMembros>

        <SubSecaoMembros titulo="Marketing">
          {marketing.map((membro) => (
            <CardMembro 
              key={membro.nome} 
              nome={membro.nome} 
              cargo={membro.cargo} 
              imagemUrl={membro.imagemUrl}
            />
          ))}
        </SubSecaoMembros>
      </div>
    </section>
  );
}

function CardMembro({ nome, cargo, imagemUrl }: { nome: string, cargo: string, imagemUrl: string }) {
  return (
    <Card className="text-center shadow-md">
      <CardHeader>
        <Image
          src={imagemUrl}
          alt={nome}
          width={96}
          height={96} 
          className="rounded-full mx-auto mb-4 object-cover w-24 h-24"
        />
        {/* --- FIM DA MUDANÇA --- */}
        <CardTitle className="font-heading">{nome}</CardTitle>
        <CardDescription className="text-lahemo-terciaria font-medium">
          {cargo}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

// Componente para criar o título e a grade de cada divisão
function SubSecaoMembros({ titulo, children }: { titulo: string, children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-lahemo-principal mb-6 border-l-4 border-lahemo-terciaria pl-3 font-heading">
        {titulo}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
}