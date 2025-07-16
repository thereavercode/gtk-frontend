import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Use require to avoid type mismatch issues with connect-history-api-fallback
import history from "connect-history-api-fallback";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "spa-fallback",
      configureServer(server) {
        server.middlewares.use(
          history({
            index: "/index.html",
            verbose: true,
          }) as any
        );
      },
    },
  ],
});
// This Vite configuration file sets up a React application with support for single-page application (SPA) routing.
// It uses the `@vitejs/plugin-react` plugin to enable React features and JSX support.
// Additionally, it includes a custom middleware to handle SPA routing using `connect-history-api-fallback`.
// This middleware ensures that all requests that do not match a static file will be redirected to `index.html`, allowing the React Router to handle the routing on the client side.
