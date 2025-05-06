// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/threejs-portfolio/',  // تأكد من أن هذا المسار هو الجذر عند العمل محليًا
  plugins: [react()],
});
