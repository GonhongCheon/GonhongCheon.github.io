<template>
    <MenuComponent />
    <router-view />
</template>

<script lang="ts">
import MenuComponent from '@/components/Menu/Menu.vue';
export default {
    name: 'CommonLayout',
    components: {
        MenuComponent,
    },
};
</script>

<style scoped></style>
