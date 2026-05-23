# ReactJS Todo List

Aplicação de lista de tarefas desenvolvida com React 19, TypeScript, Vite e Tailwind CSS.

## Visão geral

Este projeto implementa uma interface simples de criação e visualização de tarefas, com persistência no `localStorage` e uma página extra para demonstração de componentes.

### Funcionalidades

- Criação de nova tarefa
- Persistência de tarefas no `localStorage`
- Contagem de tarefas criadas e concluídas
- Página de componentes para visualização de botões, badges, ícones, inputs e skeletons
- Navegação com `react-router`

## Estrutura principal

- `src/App.tsx` — configura as rotas do app
- `src/pages/page-home.tsx` — página inicial com painel de tarefas
- `src/pages/page-components.tsx` — página de exemplos de componentes
- `src/hooks/use-task.ts` — hook para preparar nova tarefa
- `src/hooks/use-tasks.ts` — hook para carregar tarefas do armazenamento local
- `src/models/task.ts` — definição do tipo `Task` e constantes de armazenamento
- `src/core-components/` — componentes de layout e lógica de tarefa
- `src/components/` — componentes reutilizáveis de botão, input, badge, ícone, etc.

## Tecnologias

- React 19
- TypeScript 6
- Vite
- Tailwind CSS 4
- `use-local-storage` / `use-local-storage-state`
- `react-router` v7

## Scripts disponíveis

No diretório do projeto (`todo`), execute:

```bash
pnpm install
pnpm dev
```

Outros scripts:

```bash
pnpm build
pnpm lint
pnpm preview
```

## Como executar

1. Instale dependências:

```bash
pnpm install
```

2. Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

3. Abra o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Observações

- A rota principal (`/`) exibe o painel de tarefas.
- A rota `/componentes` exibe exemplos visuais dos componentes usados no projeto.
- O projeto usa `BrowserRouter` para roteamento cliente.
