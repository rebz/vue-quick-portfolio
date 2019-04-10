export const portfolioMixins = {

    computed: {
        isHome() {
            return this.$route.name === 'home'
        },
        category() {
            return this.$route.params.category || false
        }
    }

}
