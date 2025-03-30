import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

const port = 5002;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    port,
  },
  server: {
    port,
  },
  build: {
    target: "esnext",
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        "mfe-button": "./src/components/Button/web-component.tsx",
        "mfe-router": "./src/routes/web-component.tsx",
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
