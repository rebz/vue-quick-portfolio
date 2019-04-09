require('dotenv').config({
    path: __dirname + '/.env'
});

let env = process.env

const mix = require('laravel-mix')

mix.setPublicPath('./public')
    .sass('resources/sass/app.scss', 'public/css/app.css')
    .js('resources/js/app.js', 'public/js/app.js')
    .autoload({
        axios: "axios",
        nprogress: "nprogress",
        vue: "Vue"
    })
    .extract([
        "axios",
        "nprogress",
        "vue",
        "vue-router",
        "vuex"
    ])
    .webpackConfig({
        resolve : {
            alias : {
                '@': path.join(__dirname, 'resources/js'),
                '@api' : path.join(__dirname, 'resources/js/api'),
                '@components' : path.join(__dirname, 'resources/js/components'),
                '@mixins' : path.join(__dirname, 'resources/js/mixins'),
                '@router' : path.join(__dirname, 'resources/js/router'),
                '@store': path.join(__dirname, 'resources/js/store'),
                '@views' : path.join(__dirname, 'resources/js/views')
            }
        }
    })
//
if (mix.inProduction()) {
    mix.sourceMaps(true)
        .version()
        .disableNotifications()
} else {
    mix.sourceMaps(true)
        .browserSync({
            open: 'external',
            host: env.DOMAIN,
            proxy: env.DOMAIN,
            files: [
                "public/**/*.html",
                "public/js/**/*.js",
                "public/css/**/*.css"
            ]
        })
}
