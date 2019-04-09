import Vue from "vue"
import App from "@components/App"

import HomePage from '@views/home/HomePage'

import Portfolio from '@views/portfolio/Portfolio'
import PortfolioContent from '@views/portfolio/PortfolioContent'
import PortfolioGifs from '@views/portfolio/PortfolioGifs'
import PortfolioVideos from '@views/portfolio/PortfolioVideos'
import PortfolioImages from '@views/portfolio/PortfolioImages'

import PageNotFound from '@views/errors/PageNotFound'

window.VueRouter = require("vue-router/dist/vue-router.common")

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    linkActiveClass: 'active',
    linkExactActiveClass: 'active-exact',
    scrollBehavior (to, from, savedPosition) {
        if(to.hash) {
            return {
                selector: to.hash
            }
        }
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: "",
            component: App,
            children: [
                {
                    path: '',
                    name: 'home',
                    components: {
                        // default: () => import(`@views/home/HomePage`)
                        default: HomePage
                    }
                },
                {
                    path: ':category',
                    components: {
                        // default: () => import(`@views/portfolio/Portfolio`)
                        default: Portfolio
                    },
                    children: [
                        {
                            path: '',
                            name: 'portfolio',
                            components: {
                                default: PortfolioContent
                            }
                        },
                        {
                            path: 'videos',
                            name: 'videos',
                            components: {
                                default: PortfolioVideos
                            }
                        },
                        {
                            path: 'gifs',
                            name: 'gifs',
                            components: {
                                default: PortfolioGifs
                            }
                        },
                        {
                            path: 'images',
                            name: 'images',
                            components: {
                                default: PortfolioImages
                            }
                        },
                    ]
                }
            ]
        },
        {
            path: "*",
            component: App,
            children: [
                {
                    path: "",
                    name: "404",
                    components: {
                        // default: () => import('@views/errors/PageNotFound')
                        default: PageNotFound
                    }
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    next()
})

export default router
