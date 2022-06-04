import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
import HomePage from '@/pages/Home/HomePage.vue';
import ContactPage from '@/pages/Contact/ContactPage.vue';
import ResumePage from '@/pages/Resume/ResumePage.vue';

const routes: RouteRecordRaw[] = [
    { path: '/', component: HomePage },
    { path: '/contact', component: ContactPage },
    { path: '/resume', component: ResumePage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
