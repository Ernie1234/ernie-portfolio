// sanity/vite.config.ts
import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@/sanity",
        replacement: path.resolve(__dirname, "./sanity"),
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, "./"),
      },
    ],
  },
});
