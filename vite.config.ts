import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Unocss from "unocss/vite";
import { presetAttributify, presetIcons, presetUno } from "unocss";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dirs: ["src/apis", "src/composables", "src/stores", "src/utils"],
      imports: ["vue", "vue-router", "pinia", { axios: [["default", "axios"]] }],
      dts: true,
      eslintrc: { enabled: true },
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: true,
      resolvers: [ElementPlusResolver()],
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          collections: {
            logos: () => import("@iconify-json/logos").then((i) => i.icons),
            carbon: () => import("@iconify-json/carbon").then((i) => i.icons),
          },
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
