# ⚛️ Skill: React & TypeScript

> Regras e padrões para desenvolvimento de componentes React com TypeScript neste projeto.

---

## Stack
- **React 19** com Concurrent Features habilitadas
- **TypeScript 5.6** em strict mode
- **Wouter 3.x** para roteamento
- **React Hook Form + Zod** para formulários

---

## Regras Obrigatórias

### 1. Tipagem sempre explícita
```tsx
// ✅ Correto
interface HeroProps {
  title: string;
  subtitle?: string;
}

// ❌ Proibido
function Hero(props: any) { ... }
```

### 2. Componentes funcionais com tipagem de props
```tsx
// ✅ Correto
export function ServiceCard({ title, description }: ServiceCardProps) {
  return <article>{title}</article>;
}

// ❌ Evitar class components
class ServiceCard extends React.Component { ... }
```

### 3. Hooks customizados para lógica reutilizável
```tsx
// hooks/useScrollPosition.ts
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return scrollY;
}
```

### 4. Exports
- **Nomeados** para componentes utilitários e helpers.
- **Default** apenas para o componente principal do arquivo de página.

```tsx
// components/ServiceCard.tsx — export nomeado
export function ServiceCard(...) { ... }

// pages/Home.tsx — default export para a página
export default function Home() { ... }
```

### 5. Evitar prop drilling excessivo
- Máx. 2-3 níveis de prop drilling é aceitável.
- Para mais de 3 níveis, use **React Context** (`contexts/`).

---

## Padrão de Formulários (React Hook Form + Zod)
```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  phone: z.string().min(10, "Telefone inválido"),
});

type FormData = z.infer<typeof schema>;

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  // ...
}
```

---

## Importações — Ordem Recomendada
```tsx
// 1. React
import { useState, useEffect } from "react";
// 2. Libs externas
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
// 3. Componentes internos (aliases)
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
// 4. Tipos
import type { ServiceCardProps } from "@/types";
// 5. Estilos (se houver módulos CSS)
import styles from "./Component.module.css";
```

---

*Skill relacionada: [tailwindcss-v4.md](./tailwindcss-v4.md) | [design-visual.md](./design-visual.md)*
