require('./bootstrap')

window.Vue = require('vue')

import routes from './router/router'
import navbar from './components/inc/navbar.vue'


const app = new Vue({
    el: "#app",
    router: routes,
    components: {
        navbar
    }
});
