# 🖼️ Skill: Design Visual & UX

> Princípios de design, acessibilidade e experiência do usuário para o site da Control Instalações Elétricas.

---

## Identidade Visual

### Tom Visual
- **Dark & Industrial:** Fundo escuro predominante, acentos em âmbar/amarelo elétrico.
- **Técnico mas acessível:** Elementos geométricos limpos, sem exageros decorativos.
- **Espaço negativo generoso:** Margens amplas que transmitem confiança e organização.

### Paleta Geral
| Tom | Uso |
|-----|-----|
| Preto/Cinza muito escuro | Background principal |
| Cinza escuro (surface) | Cards e seções alternadas |
| Âmbar/Amarelo elétrico | CTAs, destaques, ícones ativos |
| Branco | Texto principal |
| Cinza médio | Texto secundário, eyebrows |

---

## Animações com Framer Motion

### Padrão de Entrada (Fade + Slide)
```tsx
import { motion } from "framer-motion";

// Entrada padrão de elementos em scroll
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

<motion.section {...fadeInUp}>
  {/* conteúdo */}
</motion.section>
```

### Stagger para Listas
```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

<motion.ul variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
  {items.map((i) => (
    <motion.li key={i.id} variants={item}>{i.title}</motion.li>
  ))}
</motion.ul>
```

### Hover Effects em Botões e Cards
```tsx
<motion.a
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
  Solicitar orçamento
</motion.a>
```

---

## Acessibilidade (a11y)

### Regras Obrigatórias
- **Contraste mínimo:** 4.5:1 para texto normal, 3:1 para texto grande (WCAG AA).
- **`alt` em todas as imagens** — descritivo e em português.
- **`aria-label`** em botões/links sem texto visível (ex: ícones de redes sociais).
- **`aria-expanded`** em menus toggleáveis.
- **Navegação por teclado:** todos os elementos interativos devem ser focáveis e visualmente indicados.

### Focus Visible
```css
/* index.css — garantir focus visível */
:focus-visible {
  outline: 2px solid var(--color-brand);
  outline-offset: 3px;
  border-radius: 4px;
}
```

---

## Micro-interações

| Elemento | Interação |
|---------|-----------|
| Botões CTA | `scale(1.02)` no hover, `scale(0.98)` no click |
| Cards de serviço | Sombra mais intensa + leve translação Y no hover |
| Links de nav | Underline animado ou mudança de opacidade |
| Status dot (header) | Pulsar suavemente (CSS `@keyframes pulse`) |

---

## Imagens

- **Formato:** WebP preferencial para fotos, SVG para ícones/logos.
- **Aspect Ratio:** Defina `aspect-ratio` via CSS para evitar layout shift.
- **Alt text:** `alt="Ilustração técnica de elétrica residencial"` — descritivo, não genérico.

```tsx
<img
  src="/manus-storage/control-residencial.jpg"
  alt="Instalação elétrica residencial organizada com quadro de distribuição"
  loading="lazy"
  width={800}
  height={600}
  className="rounded-xl object-cover w-full aspect-video"
/>
```

---

*Skill relacionada: [tailwindcss-v4.md](./tailwindcss-v4.md) | [negocio-tom-de-voz.md](./negocio-tom-de-voz.md)*
