import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
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
import Test from './pages/Test';
import TestResults from './pages/TestResults';
import userDB from '@/db/userDB'

Vue.use(Router);


let onsNavigatorOptions = {animation: 'none', animationOptions: { duration: 0.5 }}

let ifNotAuthenticated = (to, from, next) => {
    if (!store.getters['user/isAuthenticated']) {
        next()
    } else {
        next('/dashboard')
    }
}

let ifAuthenticated = (to, from, next) => {
    console.log(store.getters['user/isAuthenticated'])
    if (store.getters['user/isAuthenticated']) {
        next();
    } else {
        next('/auth');
    }
}


const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/splashscreen'

        },
        {
            path: '/splashscreen',
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
            beforeEnter: ifNotAuthenticated,
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
                    children: [
                        {
                            path: 'material',
                            name: 'Material',
                            component: {
                                extends: Material
                            },
                            children: [
                                {
                                    path: 'test/:id',
                                    name: 'Test',
                                    component: {
                                        extends: Test
                                    },

                                },
                                {
                                    path: 'results',
                                    name: 'TestResults',
                                    component: {
                                        extends: TestResults
                                    }
                                }
                            ]

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
                            children: [
                                {
                                    path: 'test/:id',
                                    name: 'Test',
                                    component: {
                                        extends: Test
                                    },

                                },
                                {
                                    path: 'results',
                                    name: 'TestResults',
                                    component: {
                                        extends: TestResults
                                    }
                                }

                            ]
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
            }
        },
        {
            path: '/menu',
            name: 'Menu',
            component: {
                extends: Menu,
                onsNavigatorOptions: {animation: 'none'}
            }
        },
    ]
});


export default router;