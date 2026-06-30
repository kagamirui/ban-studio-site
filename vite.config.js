import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.GITHUB_REPOSITORY === "kagamirui/ban-studio-site" ? "/ban-studio-site/" : "/",
  plugins: [react()],
  server: {
    allowedHosts: true
  },
  preview: {
    allowedHosts: true
  }
});
