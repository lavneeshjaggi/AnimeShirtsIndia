import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: { "/api": { changeOrigin: true, target: "http://localhost:5000" } },
  },
  build: {
    outDir: "dist",
    target: "esnext",
    rollupOptions: { output: { format: "es" } },
  },
  define: { global: "window", "process.env": {} },
});
