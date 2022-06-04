<template>
    <nav>
        <li>
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <router-link to="/resume">Resume</router-link>
        </li>
        <li>
            <router-link to="/contact">Contact</router-link>
        </li>
        <li className="float-right">
            <a href="https://github.com/gonhongcheon" target="_blank" rel="noreferrer">Github</a>
        </li>
    </nav>
</template>

<script lang="ts">
export default {
    name: 'MenuComponent',
};
</script>

<style lang="scss" scoped>
li {
    display: inline-block;
    margin: 0 10px;

    a {
        color: #000;
        text-decoration: none;
    }
}
</style>
