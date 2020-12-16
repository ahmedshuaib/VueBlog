export default [
    {
        name: 'login',
        path: '/login',
        component: ()=> import('../../../auth/user/login')
    },
    {
        name: 'register',
        path: '/register',
        component: ()=> import('../../../auth/user/register')
    },
    {
        name: 'password.request',
        path: 'password/reset'
    },
    {
        name: 'password.reset',
        path: 'password/reset/:token'
    }
]
