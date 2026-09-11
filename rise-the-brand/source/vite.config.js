import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" keeps every link relative, so the build works in any folder on any host
export default defineConfig({
  base: "./",
  plugins: [react()],
});
