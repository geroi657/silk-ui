import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true })
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "MyUILibrary",
      fileName: "index",
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        },
        assetFileNames: "style.css"
      }
    },
    cssCodeSplit: true,
    outDir: "dist"
  }
});
