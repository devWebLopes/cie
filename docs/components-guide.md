# 🧩 Guia de Componentes — Control Instalações Elétricas

> Padrões e diretrizes para criação e manutenção de componentes React no projeto.

---

## Hierarquia de Componentes

```
client/src/
├── components/
│   ├── ui/            # shadcn/ui — NÃO modificar diretamente
│   ├── ErrorBoundary.tsx
│   ├── Map.tsx
│   └── [SeuComponente].tsx
└── pages/
    ├── Home.tsx       # Página principal (landing one-page)
    └── NotFound.tsx   # Página 404
```

## Regras de Criação

### ✅ Correto
```tsx
// components/ServiceCard.tsx
interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number }>;
  tags: string[];
  image: string;
}

export function ServiceCard({ number, title, description, icon: Icon, tags, image }: ServiceCardProps) {
  return (
    <article className="service-card">
      {/* ... */}
    </article>
  );
}
```

### ❌ Incorreto
```tsx
// NÃO faça isso — props não tipadas, any implícito
export default function ServiceCard(props: any) {
  return <article style={{ color: 'red' }}>{props.title}</article>
}
```

## Componentes Existentes

| Componente | Localização | Descrição |
|-----------|-------------|-----------|
| `ErrorBoundary` | `components/ErrorBoundary.tsx` | Captura erros React e exibe fallback |
| `Map` | `components/Map.tsx` | Mapa Google Maps integrado |
| `ManusDialog` | `components/ManusDialog.tsx` | Dialog de debug (dev only) |
| `BrandMark` | `pages/Home.tsx` (inline) | Logo da marca |
| `SectionKicker` | `pages/Home.tsx` (inline) | Eyebrow de seção |

> **Nota:** Componentes marcados como "inline" em `Home.tsx` devem ser extraídos para `components/` quando reutilizados em mais de uma página.

## shadcn/ui — Uso Correto

```tsx
// ✅ Use como está — não modifique client/src/components/ui/
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";

// ✅ Crie wrappers se precisar de variações
// components/CtaButton.tsx
import { Button } from "@/components/ui/button";
export function CtaButton({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild><a href={href}>{children}</a></Button>;
}
```

---

*Relacionado: [README.md](./README.md) | [Design System](./design-system.md)*
