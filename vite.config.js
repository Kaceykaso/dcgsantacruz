import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: `/`, // set to '/' when custom domain, '/dcgsantacruz/' when its not
})