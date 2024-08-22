import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

// 读取 Markdown 文件作为字符串
const markdown = () => {
  return {
    name: "markdown",
    transform(src, id) {
      if (id.endsWith(".md")) {
        const markdown = fs.readFileSync(id, "utf-8");
        return `export default ${JSON.stringify(markdown)}`;
      }
    },
  };
};

export default defineConfig({
  plugins: [react({ include: [/\.jsx$/, /\.js$/] }), markdown()],
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
