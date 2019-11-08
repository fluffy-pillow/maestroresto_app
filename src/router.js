import Vue from 'vue';
import Router from 'vue-router';
import store from '../store'
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import Restore from './pages/Restore';
import Code from './pages/Code';
import NewPassword from './pages/NewPassword';
import Learning from './pages/Learning';
import Certification from './pages/Certification';
import Menu from './pages/Menu';
import Course from './pages/Course';
import Splashscreen from './pages/Splashscreen';
import Material from './pages/Course/Materials/Material';
import userDB from '@/db/userDB'

Vue.use(Router);


let onsNavigatorOptions = {animation: 'none', animationOptions: { duration: 0.5 }}

let ifNotAuthenticated = (to, from, next) => {
    if (!store.getters['user/isAuthenticated']) {
        next()
    } else {
        next('/')
    }
}

let ifAuthenticated = (to, from, next) => {
    console.log(store.getters['user/isAuthenticated'])
    if (store.getters['user/isAuthenticated']) {
        next()
    } else {
        next('/auth')
    }
}


const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Splashscreen',
            component: {
                extends: Splashscreen,
                onsNavigatorOptions: {animation: 'none'}
            },

        },
        {
            path: '/auth',
            name: 'Auth',
            component: {
                extends: Auth,
                onsNavigatorOptions: {animation: 'none'}
            },
//            beforeEnter: ifNotAuthenticated,
            children: [
                {
                    path: '/restore',
                    name: 'Restore',
                    component: {
                        extends: Restore
                    },
                    children: [
                        {
                            path: '/code',
                            name: 'Code',
                            component: {
                                extends: Code
                            },
                            children: [
                                {
                                    path: '/newpassword',
                                    name: 'NewPassword',
                                    component: {
                                        extends: NewPassword
                                    },
                                }
                            ]

                        }

                    ]
                }
            ]
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: {
                extends: Dashboard,
                onsNavigatorOptions: onsNavigatorOptions
            },
//            beforeEnter: ifAuthenticated,
            children: [
                {
                    path: 'course',
                    name: 'Course',
                    component: {
                        extends: Course
                    },
                    meta: { requiresAuth: true },
                    children: [
                        {
                            path: 'material',
                            name: 'Material',
                            component: {
                                extends: Material
                            },
                            meta: { requiresAuth: true },
                        }
                    ]
                },

            ]
        },
        {
            path: '/learning',
            name: 'Learning',
            component: {
                extends: Learning,
                onsNavigatorOptions: {animation: 'none'}
            },
            meta: { requiresAuth: true },
            children: [
                {
                    path: 'course',
                    name: 'Course',
                    component: {
                        extends: Course
                    },
                    meta: { requiresAuth: true },
                    children: [
                        {
                            path: 'material',
                            name: 'Material',
                            component: {
                                extends: Material
                            },
                            meta: { requiresAuth: true }

                        }
                    ]
                },

            ]
        },
        {
            path: '/certification',
            name: 'Certification',
            component: {
                extends: Certification,
                onsNavigatorOptions: {animation: 'none'}
            },
            meta: { requiresAuth: true },
        },
        {
            path: '/menu',
            name: 'Menu',
            component: {
                extends: Menu,
                onsNavigatorOptions: {animation: 'none'}
            },
            meta: { requiresAuth: true },
        },
    ]
});


export default router;