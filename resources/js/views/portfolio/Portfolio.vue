<template>

    <div class="Portfolio">

        <h1 class="Portfolio__title">{{ category }}</h1>

        <nav class="Portfolio__nav">
            <router-link :to="{name: 'portfolio', params: {category: category}}" exact>Content</router-link>
            <router-link :to="{name: 'videos', params: {category: category}}">Videos</router-link>
            <router-link :to="{name: 'gifs', params: {category: category}}">Gifs</router-link>
            <router-link :to="{name: 'images', params: {category: category}}">Images</router-link>
        </nav>

        <template v-if="!showMarkdown">

            <keep-alive>
                <router-view class="Portfolio__con"></router-view>
            </keep-alive>

        </template>

        <template v-else-if="bodyCopy">

            <div v-html="bodyCopy"></div>

        </template>

    </div>

</template>

<script>
    import portfolio from '@api/portfolio'
    import {portfolioMixins} from '@mixins/portfolio'

    export default {
        mixins: [portfolioMixins],
        data() {
            return {
                content: {}
            }
        },
        watch: {
            $route: {
                immediate: true,
                handler: function() {
                    if(!this.isHome) {
                        const category = this.category
                        if (category && this.$route.name != 'home' && !(category in this.content)) {
                            portfolio.get(`/portfolio/markdown/${category}`).then(response => {
                                Vue.set(this.content, category, response.data)
                            })
                        }
                    }
                }
            }
        },
        computed: {
            showMarkdown() {
                return this.$route.name === 'portfolio'
            },
            bodyCopy() {
                const content = this.content,
                      category = this.category
                return category in content && content[category]
            },
        }
    }
</script>
