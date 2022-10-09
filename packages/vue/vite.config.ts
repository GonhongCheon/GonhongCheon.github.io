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
    // css: {
    //     preprocessorOptions: {
    //         scss: {
    //             additionalData: `@import "@/assets/style/variables.scss";`,
    //         },
    //     },
    // },
    plugins: [vue()],
    resolve: {
        alias: {
            '@assets': path.resolve('../../assets'),
            '@src': path.resolve(__dirname, './src'),
        },
    },
    server: {
        port: 8080,
    },
});
