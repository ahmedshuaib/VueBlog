import Vue from 'vue'
import Router from 'vue-router'
import web_routes from './web/web'

Vue.use(Router)

export default new Router({
    routes: [
        ...web_routes
    ],
    mode: 'history'
});