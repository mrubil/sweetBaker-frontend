import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true,
  },
  build: {
    sourcemap: true, // Omogućava generisanje source map-ova
  },
});
