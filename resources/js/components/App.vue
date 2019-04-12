<template>

    <div class="Container Wrap">

        <navigation :nav="nav"></navigation>

        <div class="Container__con">

            <transition :name="transitionName" >
                <router-view class="Container__view" :key="key"></router-view>
            </transition>

        </div>

    </div>

</template>

<script>
    import portfolio from '@api/portfolio'
    import Navigation from '@views/layout/Navigation'

    export default {
        components: {
            Navigation
        },
        created() {
            portfolio.get('/portfolio/nav').then(response => {
                this.nav = response.data
            })
        },
        data() {
            return {
                nav: [],
                transitionName: null
            }
        },
        watch: {
            '$route': {
                deep: true,
                handler: function(to, from) {
                    if (to.name === 'home') {
                        this.transitionName = 'slide-left'
                    }
                    const nav = this.nav
                    const toIndex = nav.indexOf(to.params.category)
                    const fromIndex = nav.indexOf(from.params.category)
                    this.transitionName = toIndex < fromIndex ? 'slide-right' : 'slide-left'
                }
            }
        },
        computed: {
            key() {
                return this.$route.params.category !== undefined
                    ? this.$route.params.category
                    : this.$route.name
            }
        }
    }
</script>
