# 🤖 Agentes de IA — Control Instalações Elétricas

> Índice de todos os agentes de IA disponíveis para o projeto.
> Consulte este arquivo para saber **qual agente acionar** para cada tipo de tarefa.

---

## Mapa de Agentes

| Agente | Arquivo | Responsabilidade Principal |
|--------|---------|--------------------------|
| **Frontend Developer** | [frontend-dev.md](./frontend-dev.md) | Componentes React, páginas, UI, animações |
| **Design & UX** | [design-ux.md](./design-ux.md) | Visual, identidade de marca, acessibilidade |
| **SEO & Performance** | [seo-performance.md](./seo-performance.md) | Meta tags, structured data, Core Web Vitals |
| **Content Writer** | [content-writer.md](./content-writer.md) | Textos, copy, tom de voz do site |
| **QA & Review** | [qa-review.md](./qa-review.md) | Revisão de código, TypeScript, qualidade |

---

## Quando Acionar Cada Agente

### 🖥️ Frontend Developer
Acione quando precisar:
- Criar ou modificar componentes React (`.tsx`)
- Implementar novas seções/páginas
- Adicionar funcionalidades interativas (formulários, menus, modais)
- Integrar animações com Framer Motion
- Configurar rotas com Wouter

### 🎨 Design & UX
Acione quando precisar:
- Definir cores, tipografia, espaçamentos
- Criar novos padrões visuais ou tokens de design
- Revisar consistência visual entre seções
- Melhorar acessibilidade (a11y)
- Decisões de layout e responsividade

### 🔍 SEO & Performance
Acione quando precisar:
- Adicionar/atualizar meta tags
- Implementar Structured Data (JSON-LD)
- Otimizar performance de carregamento
- Auditar Core Web Vitals
- Configurar sitemap ou robots.txt

### ✍️ Content Writer
Acione quando precisar:
- Escrever ou reescrever textos do site
- Criar novos CTAs ou taglines
- Adaptar conteúdo de serviços
- Revisar tom de voz e consistência editorial

### ✅ QA & Review
Acione quando precisar:
- Revisar Pull Requests / diffs de código
- Verificar tipagem TypeScript
- Checar conformidade com padrões do projeto
- Validar acessibilidade e semântica HTML
- Executar checklist pré-deploy

---

## Fluxo Padrão de Trabalho

```
Tarefa nova
    ↓
Consultar agents.md (raiz)
    ↓
Identificar agente responsável (este README)
    ↓
Ler o arquivo .md do agente escolhido
    ↓
Consultar as skills referenciadas no agente
    ↓
Executar a tarefa seguindo os padrões definidos
    ↓
QA & Review valida o resultado
    ↓
Commit com Conventional Commits
```

---

*Relacionado: [skills/README.md](../skills/README.md) | [docs/README.md](../docs/README.md) | [agents.md](../agents.md)*
