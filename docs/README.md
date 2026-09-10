# 📚 Documentação do Projeto — Control Instalações Elétricas

> Índice principal da documentação técnica do projeto. Consulte sempre este arquivo antes de iniciar qualquer tarefa.

---

## 🏗️ Visão Geral da Arquitetura

**Projeto:** Site institucional da Control Instalações Elétricas  
**Tipo:** Web App — Landing Page one-page (SPA com servidor Express para servir os assets)  
**Idioma:** Português (pt-BR)  
**Ambiente de produção:** Node.js + Express servindo arquivos estáticos compilados pelo Vite

### Estrutura de Diretórios

```
ciele/
├── client/                  # Frontend React (raiz do Vite)
│   ├── index.html           # Entry point HTML
│   └── src/
│       ├── App.tsx          # Componente raiz
│       ├── main.tsx         # Bootstrap do React
│       ├── index.css        # Estilos globais (TailwindCSS + CSS customizado)
│       ├── const.ts         # Constantes e helpers de ambiente
│       ├── pages/           # Páginas da aplicação (roteadas via wouter)
│       ├── components/      # Componentes reutilizáveis
│       │   └── ui/          # shadcn/ui — componentes base
│       ├── contexts/        # React Contexts (estado global)
│       ├── hooks/           # Custom hooks
│       └── lib/             # Utilitários e configurações de libs
├── server/
│   └── index.ts             # Servidor Express (serve o SPA em produção)
├── shared/                  # Código compartilhado entre client e server
├── docs/                    # ← Você está aqui
├── skills/                  # Habilidades dos agentes de IA
├── agents/                  # Definições dos agentes de IA
├── plans/                   # Planejamento de tarefas
├── agents.md                # Ponto de entrada mestre da IA
├── vite.config.ts           # Configuração do Vite
├── tsconfig.json            # Configuração TypeScript raiz
├── package.json             # Dependências e scripts
└── pnpm-lock.yaml           # Lock file do pnpm
```

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| **Runtime** | Node.js | ≥ 18 |
| **Gerenciador de pacotes** | pnpm | 10.x |
| **Framework UI** | React | 19.x |
| **Linguagem** | TypeScript | 5.6 |
| **Bundler / Dev server** | Vite | 7.x |
| **Estilos** | TailwindCSS | 4.x (via `@tailwindcss/vite`) |
| **Componentes base** | shadcn/ui + Radix UI | — |
| **Ícones** | Lucide React | 0.453 |
| **Animações** | Framer Motion | 12.x |
| **Roteamento** | Wouter | 3.x |
| **Formulários** | React Hook Form + Zod | — |
| **Gráficos** | Recharts | 2.x |
| **HTTP Client** | Axios | 1.x |
| **Servidor de produção** | Express | 4.x |
| **Formatação** | Prettier | 3.x |
| **Testes** | Vitest | 2.x |

---

## 📐 Padrões Arquiteturais

### Padrão de Componentes
- **Atomic Design leve:** `ui/` contém primitivos (shadcn/ui); `components/` contém composições; `pages/` contém layouts de página.
- Cada componente é um arquivo `.tsx` no singular (ex: `ServiceCard.tsx`, não `ServiceCards.tsx`).
- Componentes de UI base do shadcn/ui **não devem ser modificados diretamente** — crie wrappers em `components/`.

### Estilização
- **TailwindCSS v4** é a abordagem primária. Evite CSS em linha, prefira classes Tailwind.
- CSS customizado global fica em `client/src/index.css` usando variáveis CSS (custom properties).
- Nomenclatura de classes CSS customizadas: `kebab-case` semântico (ex: `.service-card`, `.hero-section`).
- Dark/light mode via `next-themes` (classe `dark` no `<html>`).

### Roteamento
- **Wouter** para navegação client-side. Rotas declaradas em `App.tsx`.
- A landing page atual é one-page (seções com âncoras `#servicos`, `#metodo`, `#contato`).

### Estado Global
- **React Context** para estado simples global (ex: tema, usuário).
- Evite Redux ou Zustand enquanto não houver necessidade clara de estado complexo.

### Aliases de Importação
```typescript
import { ... } from "@/components/..."    // → client/src/
import { ... } from "@shared/..."         // → shared/
import { ... } from "@assets/..."         // → attached_assets/
```

---

## 📋 Padrões de Código

### TypeScript
- **Strict mode ativo.** Não use `any` sem justificativa documentada.
- Props de componentes sempre tipadas com `interface` ou `type`.
- Prefira `type` para tipos simples/uniões; `interface` para objetos extensíveis.
- Exports nomeados para componentes; default export apenas no componente principal do arquivo.

### Formatação (Prettier)
- Configuração em `.prettierrc` (respeite sempre — rode `pnpm format` antes de commitar).
- **Não altere as configurações do Prettier** sem discussão com a equipe.

### Nomenclatura
| Artefato | Convenção | Exemplo |
|---------|----------|---------|
| Componentes React | PascalCase | `ServiceCard.tsx` |
| Hooks customizados | camelCase com `use` | `useScrollPosition.ts` |
| Utilitários / helpers | camelCase | `formatPhone.ts` |
| Constantes | SCREAMING_SNAKE_CASE | `WHATSAPP_URL` |
| Arquivos CSS / classes | kebab-case | `hero-section` |
| Variáveis / funções | camelCase | `handleSubmit` |

### Commits
- Padrão **Conventional Commits**: `feat:`, `fix:`, `chore:`, `docs:`, `style:`, `refactor:`, `test:`
- Exemplo: `feat: adiciona seção de depoimentos na home`

---

## ⚙️ Scripts de Desenvolvimento

```bash
pnpm dev          # Inicia dev server (Vite) na porta 3000
pnpm build        # Build de produção (Vite + esbuild server)
pnpm preview      # Preview do build de produção
pnpm check        # Type-check TypeScript sem emitir arquivos
pnpm format       # Formata todos os arquivos com Prettier
```

---

## 🌐 Contexto de Negócio

**Cliente:** Control Instalações Elétricas  
**Segmento:** Serviços elétricos (residencial, industrial, quadros e automação)  
**Tom de voz:** Técnico, direto, confiável, sem exageros  
**Público-alvo:** Residências, indústrias e comércios na região de Porto Alegre/RS  
**CTA principal:** WhatsApp (`https://wa.me/5551982330183`) — "Solicitar orçamento"  
**Redes sociais:** Instagram (`@controleletrica`)

### Seções da Landing Page
1. **Hero** (`#inicio`) — Proposta de valor principal
2. **Proof Strip** — Áreas de atuação (baixa tensão, quadros, manutenção, automação)
3. **Serviços** (`#servicos`) — Residencial, Industrial, Quadros e automação
4. **Método** (`#metodo`) — 3 passos: Entender → Desenhar → Executar
5. **Statement** — Citação de impacto
6. **Contato** (`#contato`) — CTA para WhatsApp
7. **Footer** — Marca, Instagram, copyright

---

## 📎 Documentos Relacionados

- [Padrões de Componentes](./components-guide.md)
- [Guia de Estilos e Design System](./design-system.md)
- [Guia de SEO e Performance](./seo-performance.md)

---

*Última atualização: Setembro 2026 — Control Instalações Elétricas*
