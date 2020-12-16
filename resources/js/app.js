require('./bootstrap')

window.Vue = require('vue')

import routes from './router/router'
import index from './components/index.vue'


const app = new Vue({               
    el: "#app",
    router: routes,
    components: {
    }
});