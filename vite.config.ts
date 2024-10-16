/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ["src/**/*.test.ts?(x)"],
    exclude: ["node_modules/**"],
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    clearMocks: true,
    environment: "jsdom",
  },
});
