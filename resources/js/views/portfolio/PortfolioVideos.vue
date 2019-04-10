<template>

    <div class="Videos">

        <LazyVideo :src="videos[video]" ref="video" class="Video" />

        <button @click="prevVideo">
            Previous
        </button>

        <button @click="nextVideo">
            Next
        </button>

        <div class="VideoList">
            <button v-for="(v, index) in videoList" @click="setVideo(index)" :class="{ 'active' : index == video }">
                {{ v }}
            </button>
        </div>

    </div>

</template>

<script>
    import portfolio from '@api/portfolio'
    import {portfolioMixins} from '@mixins/portfolio'

    export default {

        mixins: [portfolioMixins],

        mounted() {
            window.addEventListener('keyup', (event) => {
                event.keyCode === 37 && this.prevVideo() // left arrow
                event.keyCode === 39 && this.nextVideo() // right arrow
            })
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
            loadVideo() {
                this.$refs['video'].$el.load()
            },
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
            setVideo(i) {
                this.video = i
            },
            prevVideo() {
                let newVideo = this.video-1
                this.video = newVideo >= 0 ? newVideo : (this.videos.length-1)

            },
            nextVideo() {
                let newVideo = this.video+1
                this.video = newVideo <= (this.videos.length-1) ? newVideo : 0
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
