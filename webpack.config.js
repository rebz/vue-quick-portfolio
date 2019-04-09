// This file tells the IDE how to resolve paths
// Keep in sync with webpack.config.js
const path = require('path');

module.exports = {
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
}
