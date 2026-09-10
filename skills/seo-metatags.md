# 🔍 Skill: SEO & Meta Tags

> Regras e implementações de SEO para o site da Control Instalações Elétricas.

---

## Checklist Obrigatório por Página

- [ ] `<title>` único e descritivo (50-60 chars)
- [ ] `<meta name="description">` (150-160 chars)
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`)
- [ ] Uma única `<h1>` por página
- [ ] Hierarquia correta de headings (h1 → h2 → h3)
- [ ] `alt` descritivo em todas as imagens
- [ ] Links externos com `rel="noreferrer noopener"`
- [ ] Structured Data JSON-LD (LocalBusiness)

---

## Meta Tags — Implementação em `client/index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO Primário -->
  <title>Control Instalações Elétricas | Elétrica Residencial, Industrial e Automação — Porto Alegre/RS</title>
  <meta name="description" content="Instalações elétricas com clareza técnica e execução precisa. Serviços residenciais, industriais e quadros de automação em Porto Alegre/RS. Solicite orçamento via WhatsApp." />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Control Instalações Elétricas" />
  
  <!-- Geo Local -->
  <meta name="geo.region" content="BR-RS" />
  <meta name="geo.placename" content="Porto Alegre, Rio Grande do Sul" />
  
  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="pt_BR" />
  <meta property="og:title" content="Control Instalações Elétricas — Energia bem feita muda tudo." />
  <meta property="og:description" content="Instalações elétricas com clareza técnica e execução precisa. Residencial, industrial e automação em Porto Alegre/RS." />
  <meta property="og:image" content="/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="https://controleletrica.com.br" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Control Instalações Elétricas" />
  <meta name="twitter:description" content="Energia bem feita muda tudo." />
  <meta name="twitter:image" content="/og-image.jpg" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</head>
```

---

## Structured Data — JSON-LD (LocalBusiness)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  "name": "Control Instalações Elétricas",
  "description": "Instalações elétricas residenciais, industriais e quadros de automação em Porto Alegre/RS",
  "telephone": "+5551982330183",
  "url": "https://controleletrica.com.br",
  "sameAs": [
    "https://www.instagram.com/controleletrica/"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Porto Alegre",
    "addressRegion": "RS",
    "addressCountry": "BR"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -30.0346,
      "longitude": -51.2177
    },
    "geoRadius": "50000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços Elétricos",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Elétrica Residencial" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Elétrica Industrial" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Quadros e Automação" } }
    ]
  }
}
</script>
```

---

## Performance & Core Web Vitals

| Métrica | Meta | Como atingir |
|---------|------|-------------|
| LCP | < 2.5s | Imagem hero com `fetchpriority="high"`, sem lazy load no hero |
| INP | < 200ms | Evitar handlers pesados no thread principal |
| CLS | < 0.1 | Sempre definir `width`/`height` em imagens |

### Imagem Hero — Prioridade Alta
```tsx
// Primeira imagem acima do fold — NÃO usar lazy loading
<img
  src="/manus-storage/control-hero.jpg"
  alt="..."
  fetchPriority="high"   // ← Não lazy, prioridade alta
  width={1920}
  height={1080}
/>
```

---

*Skill relacionada: [negocio-tom-de-voz.md](./negocio-tom-de-voz.md) | [docs/seo-performance.md](../docs/seo-performance.md)*
