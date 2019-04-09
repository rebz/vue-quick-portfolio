<template>

    <div class="Portfolio">

        <h1 class="Portfolio__title">{{ this.$route.params.category }}</h1>

        <nav class="Portfolio__nav">
            <router-link :to="{name: 'portfolio', params: {category: $route.params.category}}" exact>Content</router-link>
            <router-link :to="{name: 'videos', params: {category: $route.params.category}}">Videos</router-link>
            <router-link :to="{name: 'gifs', params: {category: $route.params.category}}">Gifs</router-link>
            <router-link :to="{name: 'images', params: {category: $route.params.category}}">Images</router-link>
        </nav>

        <template v-if="!showMarkdown">

            <router-view class="Portfolio__con"></router-view>

        </template>

        <template v-else-if="bodyCopy">

            <div v-html="bodyCopy"></div>

        </template>

    </div>

</template>

<script>
    import portfolio from '@api/portfolio'

    export default {
        data() {
            return {
                content: {}
            }
        },
        watch: {
            $route: {
                immediate: true,
                handler: function() {
                    if (!(this.$route.params.category in this.content)) {
                        portfolio.get(`/portfolio/markdown/${this.$route.params.category}`).then(response => {
                            Vue.set(this.content, this.$route.params.category, response.data)
                        })
                    }
                }
            }
        },
        computed: {
            showMarkdown() {
                return this.$route.name === 'portfolio'
            },
            bodyCopy() {
                return this.$route.params.category in this.content && this.content[this.$route.params.category]
            }
        }
    }
</script>
