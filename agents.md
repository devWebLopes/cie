# 🧠 agents.md — Arquivo Mestre do Projeto

> **ESTE É O PONTO DE ENTRADA OBRIGATÓRIO DA IA.**
> Qualquer agente ou assistente que atue neste projeto **deve** ler e seguir este arquivo antes de iniciar qualquer tarefa ou modificar qualquer código.

---

## ⚠️ Regras Rígidas de Operação

> [!IMPORTANT]
> **LEIA ANTES DE QUALQUER AÇÃO:**
> 1. **Consulte este arquivo** antes de iniciar qualquer tarefa.
> 2. **Consulte `docs/README.md`** para entender a arquitetura e os padrões do projeto.
> 3. **Identifique o agente correto** consultando `agents/README.md`.
> 4. **Leia as skills** referenciadas pelo agente antes de escrever código.
> 5. **Siga os padrões definidos** — não improvise soluções fora das guidelines.
> 6. **Nunca modifique** arquivos de `components/ui/` diretamente (shadcn/ui).
> 7. **Sempre rode** `pnpm check` após alterações de TypeScript.
> 8. **Use Conventional Commits** para todas as mensagens de commit.

---

## 🏢 Sobre o Projeto

**Nome:** Control Instalações Elétricas  
**Tipo:** Site institucional one-page (Landing Page SPA)  
**Idioma:** Português (pt-BR)  
**Segmento:** Serviços elétricos profissionais — residencial, industrial e automação  
**Localização do cliente:** Porto Alegre/RS, Brasil  
**Contato CTA:** WhatsApp `(51) 98233-0183`  
**Instagram:** `@controleletrica`

### Stack Tecnológica
```
Frontend:  React 19 + TypeScript 5.6 + TailwindCSS v4 + Framer Motion + shadcn/ui
Bundler:   Vite 7 + @tailwindcss/vite
Roteador:  Wouter 3.x
Ícones:    Lucide React
Backend:   Express 4 (serve o SPA em produção)
Pacotes:   pnpm 10.x
Testes:    Vitest 2.x
```

---

## 📁 Mapa da Estrutura de Governança

```
ciele/
├── agents.md                    ← VOCÊ ESTÁ AQUI (leia sempre primeiro)
│
├── docs/                        ← Documentação técnica
│   ├── README.md                ← Arquitetura, stack, padrões (leia antes de tudo)
│   ├── components-guide.md      ← Padrões de componentes React
│   ├── design-system.md         ← Tokens, cores, tipografia
│   └── seo-performance.md       ← SEO, meta tags, performance
│
├── skills/                      ← Habilidades dos agentes
│   ├── README.md                ← Índice de todas as skills
│   ├── react-typescript.md      ← React + TypeScript
│   ├── tailwindcss-v4.md        ← TailwindCSS v4
│   ├── design-visual.md         ← Design, animações, a11y
│   ├── negocio-tom-de-voz.md    ← Copywriting e tom de voz
│   ├── seo-metatags.md          ← SEO técnico
│   ├── shadcnui.md              ← shadcn/ui
│   ├── vite-build.md            ← Vite e build
│   └── git-commits.md           ← Conventional Commits
│
├── agents/                      ← Agentes especializados
│   ├── README.md                ← Índice + quando acionar cada agente
│   ├── frontend-dev.md          ← Componentes, páginas, UI
│   ├── design-ux.md             ← Design, identidade, a11y
│   ├── seo-performance.md       ← SEO técnico e performance
│   ├── content-writer.md        ← Textos e copy do site
│   └── qa-review.md             ← Revisão e validação pré-deploy
│
└── plans/                       ← Histórico de planejamentos
    └── plan-001-estrutura-base.md ← ✅ Estrutura de governança (concluído)
```

---

## 🔄 Fluxo de Trabalho Padrão

```
1. Receber tarefa
      ↓
2. Ler agents.md (este arquivo) ← OBRIGATÓRIO
      ↓
3. Ler docs/README.md para contexto técnico
      ↓
4. Consultar agents/README.md → identificar agente
      ↓
5. Ler o arquivo .md do agente escolhido
      ↓
6. Ler as skills referenciadas pelo agente
      ↓
7. Verificar se existe plano em plans/ para a tarefa
      ↓
8. Se tarefa complexa: criar plans/plan-00N-[nome].md
      ↓
9. Executar a tarefa seguindo os padrões
      ↓
10. Verificar: pnpm check + pnpm format
      ↓
11. QA & Review valida (agents/qa-review.md)
      ↓
12. Commitar com Conventional Commits
```

---

## 🤖 Mapa Rápido: Tarefa → Agente → Skills

| Tipo de Tarefa | Agente | Skills Principais |
|----------------|--------|------------------|
| Criar/editar componente React | Frontend Dev | react-typescript, tailwindcss-v4, shadcnui |
| Estilizar / design visual | Design & UX | design-visual, tailwindcss-v4 |
| Meta tags / SEO | SEO & Performance | seo-metatags, negocio-tom-de-voz |
| Escrever textos do site | Content Writer | negocio-tom-de-voz, seo-metatags |
| Revisar código / pré-deploy | QA & Review | Todas as skills |
| Configurar build / Vite | Frontend Dev | vite-build |
| Adicionar ícone | Frontend Dev | react-typescript |
| Nova animação | Frontend Dev | design-visual |
| Novo serviço/seção | Frontend Dev + Content Writer | react-typescript, negocio-tom-de-voz |

---

## 📐 Princípios Inegociáveis

1. **TypeScript strict** — Sem `any` sem justificativa. `pnpm check` sempre limpo.
2. **Mobile-first** — Todo layout começa em 375px e escala para desktop.
3. **Tom de voz consistente** — Técnico, direto, confiável. Sem clichês de marketing.
4. **Acessibilidade** — WCAG AA mínimo. Alt em imagens, aria-labels, focus visível.
5. **Conventional Commits** — Mensagens de commit seguem o padrão rigorosamente.
6. **Não improvise** — Sempre consulte a skill relevante antes de agir.
7. **Prettier** — `pnpm format` antes de qualquer commit.

---

## 📋 Histórico de Planos

| Plano | Descrição | Status |
|-------|-----------|--------|
| [plan-001](./plans/plan-001-estrutura-base.md) | Estrutura base de documentação e governança | ✅ Concluído |

> Novos planos devem ser numerados sequencialmente: `plan-002-[nome].md`

---

## 🚀 Comandos Essenciais

```bash
pnpm dev          # Iniciar dev server
pnpm check        # Verificar TypeScript
pnpm format       # Formatar código
pnpm build        # Build de produção
```

---

*Projeto: Control Instalações Elétricas | Última atualização: Setembro 2026*
*Mantido por: qualquer agente que atue neste projeto deve manter este arquivo atualizado.*
