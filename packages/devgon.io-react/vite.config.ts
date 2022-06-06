import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/product/react/',
    build: {
        outDir: '../../product/react',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
