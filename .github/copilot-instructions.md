<!-- Instruções concisas para agentes de IA que vão trabalhar neste repositório -->

# Guia rápido do repositório `site-lahemo`

Este projeto é um site em Next.js (diretório `app`) com TypeScript, TailwindCSS e componentes Radix.
Use estas instruções para entender arquitetura, convenções e comandos comuns.

## Visão geral / arquitetura
- Estrutura principal: `src/app` (Next.js App Router). Rotas são pastas com `page.tsx`, por exemplo `src/app/aulas/page.tsx`.
- Layout global em `src/app/layout.tsx` — nele são importadas fontes e o componente `Navbar`.
- Componentes reutilizáveis ficam em `src/components`. Primitives/UI reutilizáveis estão em `src/components/ui` (ex.: `button.tsx`, `sheet.tsx`, `navigation-menu.tsx`).
- Utilitários compartilhados em `src/lib` (ex.: `cn()` em `src/lib/utils.ts` usa `clsx` + `tailwind-merge`).
- Arquivos estáticos/asset: `public/` (ex.: `public/membros`, `logo-lahemo-branco.png`).

## Convenções de código que você deve seguir / procurar
- Import absoluto: use o alias `@/...` mapeado para `src/*` (veja `tsconfig.json` → `paths`).
- Cliente x Servidor: componentes que usam estado, hooks ou bibliotecas client devem começar com `"use client"` (ex.: `src/components/Navbar.tsx`).
- Reutilizáveis UI: estender ou compor componentes em `src/components/ui`. Evite espalhar primitives por várias pastas.
- Classes CSS: usar Tailwind utility classes; quando precisar mesclar condicionalmente, use `cn(...)` (em `src/lib/utils.ts`) para garantir `tailwind-merge`.
- Forward refs / padrões React: alguns componentes usam `forwardRef` (ex.: `ListItem` em `Navbar.tsx`) — preserve esse padrão quando criar links navegacionais.

## Build, dev e lint
- Desenvolvimento local: `npm run dev` (inicia `next dev` em `localhost:3000`).
- Build para produção: `npm run build` e `npm run start` para servir.
- Lint: `npm run lint` (projeto usa `eslint` e `eslint-config-next`).
- Não há testes configurados (nenhum `test` script) — adicione se necessário, mas documente no README.

## Padrões de rota e conteúdo
- Para adicionar uma nova rota pública, crie `src/app/<rota>/page.tsx`. Para rotas aninhadas, crie subpastas conforme o App Router.
- Conteúdo central: páginas como `src/app/aulas/page.tsx`, `src/app/resumos/page.tsx`, `src/app/questoes/page.tsx` já existem como exemplos.

## Integrações e dependências importantes
- Next.js 16 + React 19. O `next.config.ts` habilita `reactCompiler: true` — não remova sem entender o impacto.
- UI: Radix (`@radix-ui/*`) para componentes acessíveis e `lucide-react` para ícones.
- TailwindCSS v4 + `tailwind-merge` para resolução de classes.

## Boas práticas específicas deste projeto
- Ao adicionar imagens, coloque em `public/` e referencie por caminho absoluto (ex.: `/logo-lahemo-branco.png`).
- Mantenha componentes de navegação e layout no topo (ex.: `Navbar` é inserido em `src/app/layout.tsx`).
- Ao criar novos componentes de UI, adicione-os em `src/components/ui` e exporte componentes compostos em `src/components` quando fizer sentido.

## Exemplos rápidos
- Import absoluto:
  - `import Navbar from '@/components/Navbar'`
- Mesclar classes:
  - `className={cn('p-4', isActive && 'bg-red-100')}`
- Criar rota:
  - `src/app/novo-topico/page.tsx` → export default componente React.

## O que evitar
- Misturar lógica client/server sem marcar `"use client"` (vai quebrar SSR/hidração).
- Modificar `next.config.ts` sem validar `reactCompiler` e compatibilidade com Next 16.

Se algo estiver incorreto ou faltar contexto (ex.: fluxos de deploy, regras de commit), me diga que eu atualizo este arquivo com as informações adicionais.
