# 📝 Skill: Git & Conventional Commits

> Padrões de versionamento e commits para o projeto Control Instalações Elétricas.

---

## Conventional Commits

### Formato
```
<tipo>(<escopo opcional>): <descrição curta>

[corpo opcional — mais detalhes]

[rodapé opcional — breaking changes, issues]
```

### Tipos Permitidos

| Tipo | Quando usar |
|------|-------------|
| `feat` | Nova funcionalidade ou nova seção |
| `fix` | Correção de bug |
| `style` | Mudanças visuais/CSS sem alterar lógica |
| `refactor` | Refatoração sem mudança de comportamento |
| `docs` | Atualizações em documentação |
| `chore` | Tarefas de manutenção (deps, config) |
| `test` | Adição ou correção de testes |
| `perf` | Melhoria de performance |

### Exemplos Reais do Projeto

```bash
feat: adiciona seção de depoimentos de clientes na home
fix: corrige responsividade do menu mobile em telas < 375px
style: ajusta espaçamento vertical entre cards de serviço
refactor: extrai componente ServiceCard da página Home
docs: atualiza README principal com instrução de build
chore: atualiza dependências lucide-react para 0.454
perf: adiciona lazy loading nas imagens dos cards de serviço
```

---

## Escopos Sugeridos

Use escopos para indicar onde a mudança acontece:

```
feat(hero): ...
fix(nav): ...
style(footer): ...
refactor(services): ...
chore(deps): ...
```

---

## Boas Práticas de Branch

| Tipo de mudança | Padrão de branch |
|----------------|-----------------|
| Nova feature | `feat/nome-da-feature` |
| Correção de bug | `fix/descricao-do-bug` |
| Hotfix urgente | `hotfix/descricao` |
| Melhoria de performance | `perf/descricao` |
| Atualização de docs | `docs/descricao` |

```bash
# Exemplos
git checkout -b feat/secao-depoimentos
git checkout -b fix/menu-mobile-responsivo
git checkout -b perf/lazy-loading-imagens
```

---

## Checklist Antes de Commitar

- [ ] `pnpm check` — sem erros TypeScript
- [ ] `pnpm format` — código formatado com Prettier
- [ ] Sem `console.log` de debug esquecido
- [ ] Sem arquivos desnecessários (`.DS_Store`, `*.log`, etc.)
- [ ] Mensagem de commit segue o padrão Conventional Commits

---

*Skill relacionada: [react-typescript.md](./react-typescript.md) | [vite-build.md](./vite-build.md)*
