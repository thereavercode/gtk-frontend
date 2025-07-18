import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import history from "connect-history-api-fallback";
import type { NextHandleFunction } from "connect";

export default defineConfig(({ mode: _mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    // Add SPA fallback middleware for dev server via plugin below
  },
  plugins: [
    react(),
    {
      name: "spa-fallback",
      configureServer(server) {
        const fallbackMiddleware = history({
          index: "/index.html",
          verbose: true,
        }) as NextHandleFunction;

        server.middlewares.use(fallbackMiddleware);
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
}));
