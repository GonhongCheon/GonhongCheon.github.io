import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/product/vue/',
    build: {
        emptyOutDir: true,
        outDir: '../../product/vue/',
    },
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve('../../assets'),
        },
    },
    server: {
        port: 8080,
    },
});
