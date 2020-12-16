export default [
    {
        name: "admin.login",
        path: "/admin/login",
        component: ()=> import('../../../auth/admin/login')
    },
    {
        name: 'admin.confirm',
        path: '/admin/confirm',
        component: ()=> import('../../../auth/admin/passwords/confirm')
    },
    {
        name: 'admin.email',
        path: '/admin/email',
        component: ()=> import('../../../auth/admin/passwords/email')
    },
    {
        name: 'admin.reset',
        path: '/admin/reset',
        component: ()=> import('../../../auth/admin/passwords/reset')
    }
]
