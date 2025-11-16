// src/components/Sobre.tsx
import { Atom, BookOpen, HandHeart } from 'lucide-react'; // Ícones

export default function Sobre() {
  return (
    // id="sobre" é a âncora para o link do menu
    <section id="sobre" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-5xl px-4">

        {/* Título da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
            Quem Somos
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            Nossa missão, valores e o pilar da nossa atuação.
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Texto Descritivo */}
          <div className="text-base text-gray-700 space-y-4">
            <p>
              A **LAHEMO** (Liga Acadêmica de Hematologia e Hemoterapia) é uma 
              entidade estudantil sem fins lucrativos, vinculada à [Nome da sua Universidade], 
              dedicada a aprofundar o conhecimento na área da hematologia.
            </p>
            <p>
              Nosso objetivo é complementar a formação acadêmica, 
              fomentando o contato direto de estudantes com profissionais da área, 
              atividades práticas e produção científica relevante.
            </p>
          </div>

          {/* O Tripé Acadêmico */}
          <div className="flex flex-col space-y-6">
            <InfoCard
              icon={<BookOpen className="h-6 w-6 text-red-800" />}
              title="Ensino"
              description="Aulas, discussões de casos clínicos e jornadas acadêmicas para expandir o conhecimento teórico."
            />
            <InfoCard
              icon={<Atom className="h-6 w-6 text-red-800" />}
              title="Pesquisa"
              description="Incentivo à produção científica, desenvolvimento de projetos e apresentação em congressos."
            />
            <InfoCard
              icon={<HandHeart className="h-6 w-6 text-red-800" />}
              title="Extensão"
              description="Ações sociais, como campanhas de doação de sangue e cadastro de medula óssea (REDOME)."
            />
          </div>
        </div>

      </div>
    </section>
  );
}

// Sub-componente para os Cards (só funciona dentro deste arquivo)
function InfoCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm">
      <div className="flex-shrink-0 mr-4 bg-red-100 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}