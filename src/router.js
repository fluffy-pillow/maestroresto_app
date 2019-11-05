import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import Restore from './pages/Restore';
import Code from './pages/Code';
import NewPassword from './pages/NewPassword';
import Learning from './pages/Learning';
import Certification from './pages/Certification';
import Menu from './pages/Menu';
import Course from './pages/Course';
import Material from './pages/Course/Materials/Material';
import userDB from '@/db/userDB'

Vue.use(Router);


const ifNotAuthenticated = (to, from, next) => {
    next('/')
}

const ifAuthenticated = (to, from, next) => {
    console.log(1111)
    next('/auth')
}

let onsNavigatorOptions = {animation: 'none', animationOptions: { duration: 0.5 }}

const router = new Router({
    routes: [
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: {
                extends: Dashboard,
                onsNavigatorOptions: onsNavigatorOptions
            },
            beforeEnter (to, from, next) {
                onsNavigatorOptions.animation = (from.name === 'Auth') ? 'lift' : 'none'
                next()
            },
            children: [
                {
                    path: 'course',
                    name: 'Course',
                    component: {
                        extends: Course
                    },
                    children: [
                        {
                            path: 'material',
                            name: 'Material',
                            component: {
                                extends: Material
                            },

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
            children: [
                {
                    path: 'course',
                    name: 'Course',
                    component: {
                        extends: Course
                    },
                    children: [
                        {
                            path: 'material',
                            name: 'Material',
                            component: {
                                extends: Material
                            },

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
        },
        {
            path: '/menu',
            name: 'Menu',
            component: {
                extends: Menu,
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
        }
    ]
});


export default router;