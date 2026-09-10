# 🎨 Skill: TailwindCSS v4

> Regras e padrões para uso do TailwindCSS v4 neste projeto.

---

## Versão e Configuração
- **TailwindCSS 4.x** integrado via plugin Vite (`@tailwindcss/vite`).
- **Não existe `tailwind.config.js`** na v4 — configuração feita via diretivas CSS em `index.css`.
- Plugin de animações: `tailwindcss-animate` e `tw-animate-css`.
- Plugin de tipografia: `@tailwindcss/typography`.

---

## Como Configurar Tokens (index.css)

```css
/* client/src/index.css */
@import "tailwindcss";

@theme {
  --color-brand: oklch(0.85 0.18 85);       /* Amarelo âmbar elétrico */
  --color-surface: oklch(0.15 0.01 240);    /* Cinza escuro */
  --font-sans: "Inter", sans-serif;
}
```

---

## Regras de Uso

### ✅ Preferir classes Tailwind
```tsx
// ✅ Correto
<div className="flex items-center gap-4 rounded-xl bg-surface p-6 md:p-8">
```

### ❌ Evitar inline styles
```tsx
// ❌ Proibido (exceto casos dinâmicos com valores calculados em JS)
<div style={{ backgroundColor: '#1a1a1a', padding: '24px' }}>
```

### Valores Dinâmicos em JS — Exceção permitida
```tsx
// ✅ Permitido apenas quando o valor é realmente dinâmico (ex: progress bar)
<div style={{ width: `${progress}%` }} className="h-2 bg-brand rounded-full" />
```

---

## Classes Customizadas vs Utilitárias

| Situação | Abordagem |
|---------|-----------|
| Estilo único de componente complexo | CSS class em `index.css` (ex: `.service-card`) |
| Ajuste pontual simples | Classe utilitária Tailwind (ex: `mt-4`, `text-sm`) |
| Componente shadcn/ui | `cn()` utility para merge de classes |

### Usando `cn()` para merge de classes
```tsx
import { cn } from "@/lib/utils";

<button className={cn(
  "button button-primary",
  isLarge && "button-large",
  className
)}>
```

---

## Responsividade — Breakpoints

```
sm:   640px  → Mobile grande
md:   768px  → Tablet
lg:  1024px  → Desktop pequeno
xl:  1280px  → Desktop
2xl: 1536px  → Desktop grande
```

### Padrão Mobile-First
```tsx
// ✅ Correto — começa mobile, escala para desktop
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

// ❌ Evitar — começa desktop, sobreescreve para mobile (não é mobile-first)
<div className="grid grid-cols-3 gap-6 sm:grid-cols-1">
```

---

## Dark Mode

- O dark mode é controlado pela classe `dark` no elemento `<html>` via `next-themes`.
- Use variantes `dark:` para estilos específicos do modo escuro.

```tsx
<p className="text-gray-900 dark:text-gray-100">Texto adaptável</p>
```

---

*Skill relacionada: [design-visual.md](./design-visual.md) | [react-typescript.md](./react-typescript.md)*
