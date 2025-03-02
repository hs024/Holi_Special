// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Holi_Special/", // Add your repository name here
  plugins: [react(),
    tailwindcss()],
});
