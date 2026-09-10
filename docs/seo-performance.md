# 🔍 SEO e Performance — Control Instalações Elétricas

> Diretrizes para otimização de SEO e performance do site.

---

## SEO

### Meta Tags Obrigatórias (em `client/index.html`)
```html
<title>Control Instalações Elétricas | Elétrica Residencial, Industrial e Automação em Porto Alegre</title>
<meta name="description" content="Instalações elétricas com clareza técnica e execução precisa. Serviços residenciais, industriais e quadros de automação em Porto Alegre/RS. Solicite orçamento via WhatsApp." />
<meta name="robots" content="index, follow" />

<!-- Open Graph -->
<meta property="og:title" content="Control Instalações Elétricas" />
<meta property="og:description" content="Energia bem feita muda tudo." />
<meta property="og:type" content="website" />
<meta property="og:image" content="/og-image.jpg" />

<!-- Geo -->
<meta name="geo.region" content="BR-RS" />
<meta name="geo.placename" content="Porto Alegre" />
```

### Structured Data (JSON-LD) — Adicionar no `<head>`
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Control Instalações Elétricas",
  "telephone": "+5551982330183",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Porto Alegre",
    "addressRegion": "RS",
    "addressCountry": "BR"
  },
  "url": "https://controleletrica.com.br",
  "sameAs": ["https://www.instagram.com/controleletrica/"]
}
</script>
```

### Regras de Conteúdo
- **Uma `<h1>` por página** — atualmente: "Energia bem feita muda tudo."
- **`<h2>`** para títulos de seção, **`<h3>`** para cards.
- Imagens **sempre com `alt` descritivo** em português.
- Links externos com `rel="noreferrer noopener"` quando `target="_blank"`.

---

## Performance

### Imagens
- Use imagens servidas pelo `manus-storage` (storage proxy configurado no Vite).
- Prefira formato **WebP** para fotos.
- Adicione `loading="lazy"` em imagens abaixo do fold.
- Defina `width` e `height` para evitar CLS (Cumulative Layout Shift).

### Bundle
- O Vite aplica tree-shaking automaticamente — importe somente o necessário.
- Ícones Lucide: importe individualmente (`import { Zap } from "lucide-react"`) — **nunca** importe `*`.
- Framer Motion: use `LazyMotion` + `domAnimation` para reduzir bundle quando necessário.

### Core Web Vitals — Metas
| Métrica | Meta |
|---------|------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID / INP | < 200ms |
| CLS (Cumulative Layout Shift) | < 0.1 |

### Checklist de Auditoria
- [ ] Todas as imagens têm `alt` descritivo
- [ ] Imagens abaixo do fold têm `loading="lazy"`
- [ ] `<title>` e `<meta description>` presentes e únicos
- [ ] Structured Data (JSON-LD) configurado
- [ ] Nenhum `console.log` em produção
- [ ] `pnpm build` passa sem erros TypeScript

---

*Relacionado: [README.md](./README.md)*
