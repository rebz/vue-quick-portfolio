<template>

    <nav class="Navigation" v-if="nav.length">

        <router-link :to="{name: 'home'}" exact>home</router-link>

        <router-link v-for="(page, index) in nav" :key="`${index}-${page}`" :to="{name: 'portfolio', params: {category: page}}">{{ page }}</router-link>

    </nav>

</template>

<script>
    import portfolio from '@api/portfolio'

    export default {

        data() {
            return {
                nav: [],
            }
        },

        created() {
            portfolio.get('/portfolio/nav').then(response => {
                this.nav = response.data
            })
        }
    }
</script>
