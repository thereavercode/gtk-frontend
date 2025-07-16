import { defineConfig } from "vite";
import type { Plugin } from "vite"; // 👈 FIXED
import react from "@vitejs/plugin-react";
import history from "connect-history-api-fallback";
import type { NextHandleFunction } from "connect"; // 👈 for typing middleware

// Custom Vite plugin to add SPA fallback
const spaFallbackPlugin: Plugin = {
  name: "spa-fallback",
  configureServer(server) {
    const fallbackMiddleware = history({
      index: "/index.html",
      verbose: true,
    }) as NextHandleFunction;

    server.middlewares.use(fallbackMiddleware);
  },
};

export default defineConfig({
  plugins: [react(), spaFallbackPlugin],
  server: {
    port: 5173,
  },
  build: {
    outDir: "../gtk-server/dist",
    emptyOutDir: true,
  },
});
