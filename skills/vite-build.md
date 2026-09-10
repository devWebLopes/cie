# ⚙️ Skill: Vite & Build

> Configuração e padrões de build do projeto com Vite 7.

---

## Visão Geral

- **Bundler:** Vite 7 + `@vitejs/plugin-react`
- **Raiz do frontend:** `client/` (não a raiz do projeto)
- **Output do build:** `dist/public/`
- **Server build:** esbuild compila `server/index.ts` → `dist/index.js`

---

## Aliases de Importação

Configurados em `vite.config.ts`:

```typescript
resolve: {
  alias: {
    "@":        "client/src/",        // imports internos do frontend
    "@shared":  "shared/",            // código compartilhado client+server
    "@assets":  "attached_assets/",   // assets estáticos adicionais
  },
}
```

### Uso nos arquivos TypeScript
```typescript
import { Button } from "@/components/ui/button";    // ✅
import { COOKIE_NAME } from "@shared/const";         // ✅
import logo from "@assets/logo.png";                 // ✅

import { Button } from "../../components/ui/button"; // ❌ evitar paths relativos longos
```

---

## Scripts e Comandos

```bash
# Desenvolvimento (hot reload)
pnpm dev

# Type-check (sem emitir arquivos)
pnpm check

# Build de produção completo
pnpm build
# Equivalente a:
# vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist

# Preview do build de produção
pnpm preview

# Formatar código
pnpm format
```

---

## Variáveis de Ambiente

- **Arquivo `.env`** na raiz do projeto (lido pelo Vite via `envDir`).
- Variáveis de ambiente para o **frontend** devem começar com `VITE_`:
  ```
  VITE_OAUTH_PORTAL_URL=https://...
  VITE_APP_ID=my-app-id
  ```
- Variáveis de ambiente para o **server** (Node.js) não precisam do prefixo `VITE_`.
- **Nunca commite** arquivos `.env` com dados sensíveis. Use `.env.example`.

---

## Storage Proxy (Dev)

O Vite está configurado com um proxy de storage para servir assets do `manus-storage`:

```
/manus-storage/[key]  →  redireciona para URL assinada do Forge Storage
```

Imagens do site referenciadas como `/manus-storage/control-logo.png` funcionam em desenvolvimento via este proxy.

---

## Plugins Vite Configurados

| Plugin | Função |
|--------|--------|
| `@vitejs/plugin-react` | JSX, Fast Refresh |
| `@tailwindcss/vite` | TailwindCSS v4 integrado |
| `@builder.io/vite-plugin-jsx-loc` | Adiciona info de localização a JSX (dev) |
| `vite-plugin-manus-runtime` | Runtime Manus |
| `vitePluginManusDebugCollector` | Coleta logs do browser (dev) |
| `vitePluginStorageProxy` | Proxy de assets de storage (dev) |

> ⚠️ **Não remova** nenhum plugin existente sem entender o impacto. Os plugins Manus são necessários para o ambiente de desenvolvimento.

---

## Build de Produção — Estrutura de Output

```
dist/
├── index.js         # Servidor Express compilado (Node.js)
└── public/          # Assets estáticos do frontend (servidos pelo Express)
    ├── index.html
    ├── assets/
    │   ├── index-[hash].js
    │   └── index-[hash].css
    └── ...
```

---

*Skill relacionada: [react-typescript.md](./react-typescript.md) | [docs/README.md](../docs/README.md)*
