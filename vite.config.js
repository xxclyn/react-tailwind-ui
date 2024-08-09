import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import markdown from "vite-plugin-react-markdown";

export default defineConfig({
  plugins: [react({ include: [/\.jsx$/, /\.js$/, /\.md$/] }), markdown()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "lib"),
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.jsx"),
      formats: ["es"],
      name: "rt-ui",
      fileName: "rt-ui",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
