import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  esbuild: {
    loader: "jsx", // This will tell Vite's esbuild to treat .js files as JSX
    include: [/\.js$/], // This will include all .js files in the transformation
  },
});
