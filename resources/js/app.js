// TODO - below needed for lazy loading vue routes on older browsers
// https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import/
// import "core-js/modules/es6.promise";
// import "core-js/modules/es6.array.iterator";

// TODO - needed for the video lazy loading
// https://github.com/w3c/IntersectionObserver/tree/master/polyfill

// require('@mixins/global')

import router from "./router";
import store from "./store";

require("./bootstrap");
require("./components");

const app = new Vue({
    router,
    store,
});

app.$mount("#app")
