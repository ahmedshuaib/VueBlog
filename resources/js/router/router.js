import Vue from 'vue'
import Router from 'vue-router'
import web_routes from './web/web'
import user_auth_routes from './auth/user/auth'
import admin_auth_routes from './auth/admin/auth'

Vue.use(Router)

export default new Router({
    routes: [
        ...web_routes,
        ...user_auth_routes,
        ...admin_auth_routes
    ],
    mode: 'history'
});
