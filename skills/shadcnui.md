# 🧱 Skill: shadcn/ui

> Guia de uso dos componentes shadcn/ui neste projeto.

---

## O que é shadcn/ui aqui?
- Componentes pré-instalados em `client/src/components/ui/`.
- **Não são de uma lib npm** — são arquivos locais copiados e customizáveis.
- Configuração em `components.json` na raiz do projeto.
- Utilitário `cn()` disponível em `@/lib/utils`.

---

## Regras de Uso

### ✅ Correto — Usar como primitivo
```tsx
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

<Button variant="outline" size="lg">Saiba mais</Button>
```

### ✅ Correto — Criar wrapper para variações de negócio
```tsx
// components/CtaButton.tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function CtaButton({ href, children, className }: CtaButtonProps) {
  return (
    <Button asChild className={cn("button-primary", className)}>
      <a href={href} target="_blank" rel="noreferrer">{children}</a>
    </Button>
  );
}
```

### ❌ Incorreto — Modificar arquivos em ui/ diretamente
```tsx
// ❌ Não edite client/src/components/ui/button.tsx
// Crie wrappers em client/src/components/ ao invés disso
```

---

## Componentes shadcn/ui Disponíveis

Baseado nos pacotes Radix UI instalados:

| Componente | Import |
|-----------|--------|
| Accordion | `@/components/ui/accordion` |
| Alert Dialog | `@/components/ui/alert-dialog` |
| Avatar | `@/components/ui/avatar` |
| Button | `@/components/ui/button` |
| Checkbox | `@/components/ui/checkbox` |
| Dialog | `@/components/ui/dialog` |
| Dropdown Menu | `@/components/ui/dropdown-menu` |
| Input | `@/components/ui/input` |
| Label | `@/components/ui/label` |
| Popover | `@/components/ui/popover` |
| Progress | `@/components/ui/progress` |
| Radio Group | `@/components/ui/radio-group` |
| Select | `@/components/ui/select` |
| Separator | `@/components/ui/separator` |
| Slider | `@/components/ui/slider` |
| Switch | `@/components/ui/switch` |
| Tabs | `@/components/ui/tabs` |
| Tooltip | `@/components/ui/tooltip` |

---

## Adicionando Novos Componentes shadcn/ui

```bash
# Via CLI shadcn (caso disponível)
pnpm dlx shadcn@latest add [component-name]
```

> ⚠️ Após adicionar, verifique se o componente apareceu em `client/src/components/ui/` antes de importar.

---

## Utilitário `cn()`

```tsx
import { cn } from "@/lib/utils";

// Merge de classes condicionais
<div className={cn(
  "base-class another-class",
  condition && "conditional-class",
  props.className
)} />
```

---

*Skill relacionada: [react-typescript.md](./react-typescript.md) | [tailwindcss-v4.md](./tailwindcss-v4.md)*
