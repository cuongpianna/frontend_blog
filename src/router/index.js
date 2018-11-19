import Vue from 'vue';
import VueRouter from 'vue-router';
import Admin from '../layout/admin/Admin'
import Home from '../layout/public/Home'
import Dashboard from '../features/admin/Dashboard'
import AdminCategory from '../features/admin/AdminCategory'


Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/admin',
            component: Admin,
            children: [
                {
                    path: '',
                    component: Dashboard,
                },
                {
                    path: 'categories',
                    component: AdminCategory
                }
            ]
        }
    ]
})

export default router;