import Vue from 'vue';
import VueRouter from 'vue-router';
import Admin from '../layout/admin/Admin'
import Home from '../layout/public/Home'
import Dashboard from '../features/admin/Dashboard'


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
                    component: Dashboard
                }
            ]
        }
    ]
})

export default router;