# 🎨 Design System — Control Instalações Elétricas

> Tokens de design, paleta de cores, tipografia e padrões visuais do projeto.

---

## Paleta de Cores

As cores são definidas como variáveis CSS em `client/src/index.css`:

| Token | Valor (aproximado) | Uso |
|-------|-------------------|-----|
| `--color-brand` | Amarelo âmbar elétrico | CTAs, destaques, ícones |
| `--color-surface` | Cinza escuro neutro | Backgrounds de cards |
| `--color-text` | Branco / cinza claro | Texto principal |
| `--color-muted` | Cinza médio | Textos secundários, eyebrows |
| `--color-border` | Cinza escuro sutil | Bordas de cards e separadores |

> ⚠️ Nunca use valores hexadecimais hardcoded no código. Sempre referencie variáveis CSS.

## Tipografia

- **Font stack:** Sistema por padrão + `@tailwindcss/typography` para conteúdo longo.
- **Hierarquia:**
  - `h1` — Hero principal. Uma por página.
  - `h2` — Título de seção. Máximo 1 por seção.
  - `h3` — Título de card ou item de lista.
  - `p` / `span` — Texto corrido e rótulos.

## Classes CSS Globais de Utilidade

Definidas em `index.css` e disponíveis globalmente:

| Classe | Descrição |
|--------|-----------|
| `.container` | Largura máxima centralizada com padding responsivo |
| `.section-pad` | Padding vertical padrão de seções |
| `.button` | Base de botões — sempre combine com modificador |
| `.button-primary` | Botão de destaque (amarelo âmbar) |
| `.button-large` | Variante maior do botão |
| `.section-kicker` | Eyebrow de seção com linha decorativa |
| `.eyebrow` | Texto pequeno acima de títulos |

## Animações e Motion

- **Framer Motion** para animações declarativas em React.
- Princípio: animações devem ser sutis e reforçar o conteúdo — não distrair.
- Prefira `whileInView` para animações on-scroll.
- Duração padrão: `0.4s` — `0.6s`. Ease: `easeOut`.

```tsx
// Padrão de animação de entrada de seção
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  {/* conteúdo */}
</motion.div>
```

## Responsividade

- **Mobile-first:** escreva estilos para mobile e use breakpoints para escalá-los.
- Breakpoints TailwindCSS v4 padrão: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px).
- Menu mobile: toggle com estado React (`useState`), classe `is-open` no `nav`.

## Ícones

- Biblioteca: **Lucide React** exclusivamente.
- Tamanho padrão para inline: `size={15}` a `size={20}`.
- Tamanho para CTA/destaque: `size={17}` a `size={21}`.
- Nunca use ícones como imagens PNG/SVG importadas — use o componente Lucide.

---

*Relacionado: [README.md](./README.md) | [Guia de Componentes](./components-guide.md)*
