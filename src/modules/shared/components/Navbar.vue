<template>
    <div>
        <!-- <router-link :to="{ name: '/'}">Pokemon List</router-link>
        <router-link :to="{ name: 'pokemon-id', params: { id: 85 } }">Pokemon id</router-link>
        <router-link :to="{ name: 'about'}">About</router-link> -->
        <CustomLink
            v-for="link in links"
            :key="link.to"
            :link="link"
        />
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'


export default {
    data() {
        return {
            links: [
                { to: 'pokemon-home', name: 'Pokemon'},
                { to: 'pokemon-id', name: 'Por ID', id: 151 },
                { to: 'about', name: 'About'},


                { to: 'characters', name: 'Characters'},
                { to: 'about-dbz', name: 'about DBZ'},


                { to: 'https://google.com', name: 'Google'},
            ]
        }
    },
    components: {
        CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
    }
}
</script>

<style scoped>
    div {
        padding: 0 30px;
    }
    div a {
        font-weight: bold;
        color: #2c3e50;
        margin: 0 10px;
    }

    /* div .router-link-exact-active {
        color: #42b983;
    } */
</style>