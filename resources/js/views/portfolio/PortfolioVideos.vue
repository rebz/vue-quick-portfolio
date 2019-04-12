<template>

    <div class="Videos">

        <div class="Videos__con" v-show="videos[video]">

            <LazyVideo :src="videos[video]" ref="video" class="Video" />

            <button @click="stepVideo(-1)">
                Previous
            </button>

            <button @click="stepVideo(+1)">
                Next
            </button>

            <div class="VideoList">
                <button v-for="(v, index) in videoList" @click="setVideo(index)" :class="{ 'active' : index == video }">
                    {{ v }}
                </button>
            </div>

        </div>

    </div>

</template>

<script>
    import portfolio from '@api/portfolio'
    import { portfolioMixins } from '@mixins/portfolio'

    export default {

        mixins: [portfolioMixins],

        mounted() {
            window.addEventListener('keyup', this.keyVideo)
        },

        beforeDestroy() {
            window.removeEventListener('keyup', this.keyVideo)
        },

        data() {
            return {
                sources: [],
                video: 0
            }
        },

        watch: {
            '$route': {
                immediate: true,
                deep: true,
                handler: function() {
                    if(!this.isHome) {
                        this.getSources().then(() => {
                            this.setVideo(0)
                            this.loadVideo()
                        })
                    }
                }
            },
            video: {
                handler: function() {
                    // load selected video into player
                    this.loadVideo()
                }
            }
        },

        methods: {
            getSources() {
                return new Promise((resolve, reject) => {
                    portfolio.get(`/portfolio/videos/${this.category}`).then(response => {
                        this.sources = response.data
                        resolve(response)

                    }).catch(error => {
                        reject(error)
                    })
                })
            },
            loadVideo() {
                this.$refs['video'].$el.load()
            },
            setVideo(i) {
                this.video = i
            },
            stepVideo(dir) {
                const newStep = this.video + dir
                const length = this.videos.length-1
                this.video = newStep > length ? 0 : newStep < 0 ? length : newStep
            },
            keyVideo(event) {
                event.keyCode === 37 && this.stepVideo(-1) // left arrow
                event.keyCode === 39 && this.stepVideo(+1) // right arrow
            }
        },

        computed: {
            videos() {
                if (!this.sources.length) {
                    return []
                }
                return this.sources
            },
            videoList() {
                return this.sources.map(v => {
                    let parts = v.split('/')
                    return parts[parts.length-1].split('.')[0]
                })
            }
        },
    }
</script>
