# login--element-plus

前端登录模块，基于 starter--vite-ts-unocss、Element Plus UI

## Project Setup

```sh
pnpm i
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
pnpm build
pnpm test:e2e # or `pnpm test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## Starter Setup

### Based on [starter--vite-ts-unocss](https://github.com/cicadasinging/starter--vite-ts-unocss)

#### Element Plus

Terminal:

```sh
pnpm add element-plus
```

`vite.config.ts`:

```typescript
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
```
