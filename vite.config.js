import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      // 注入全局scss变量
      scss: {
        additionalData: `@import "@style/variables.scss";`,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@style",
        replacement: path.resolve(__dirname, "src/style"),
      },
    ],
  },
});
