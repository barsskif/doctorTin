import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { default as svgr }  from "vite-plugin-svgr";

import type { UserConfig } from "vitest/config";

const test = {
  globals: true,
  environment: "jsdom",
  setupFiles: ["src/__tests__/setupTests.ts"],
  threads: false,
  watch: false,
} as UserConfig["test"];

// https://vitejs.dev/config/
const isProd = process.env.NODE_ENV === "production";
export default defineConfig({
  plugins: [react(), svgr()],
  server: { port: 3000 },
  build: {
    minify: false,
  },
  test,
});
