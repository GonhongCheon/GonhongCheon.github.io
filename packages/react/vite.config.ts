import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: '../../product/react/',
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, './src'),
            '~stitches': './stitches.config.ts',
            '@assets': path.resolve('../../assets'),
        },
    },
    base: '/product/react/',
    server: {
        port: 3000,
    },
});
