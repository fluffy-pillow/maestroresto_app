import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import Restore from './pages/Restore';
import Code from './pages/Code';
import NewPassword from './pages/NewPassword';
import Learning from './pages/Learning';
import Certifications from './pages/Certifications';
import Certification from './pages/Certification';
import CertificationResults from './pages/CertificationResults';
import Menu from './pages/Menu';
import Course from './pages/Course';
import Splashscreen from './pages/Splashscreen';
import Material from './pages/Material';
import Test from './pages/Test';
import TestResults from './pages/TestResults';
import Favorite from './pages/Favorite';
import MainMenu from './pages/MainMenu';
import MainMenuSlug from './pages/MainMenuSlug';
import Structure from './pages/Structure';
import Chat from './pages/Chat';
import Edit from './pages/Edit';
import Help from './pages/Help';
import Support from './pages/Support';

Vue.use(Router);


let onsNavigatorOptions = {animation: 'none', animationOptions: { duration: 0.5 }}


const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters['user/isAuthenticated']) {
        mapRouteStack(to) && next()
        return
    }
    mapRouteStack(router.resolve({name: 'Dashboard'}).route) && next()
}

const ifAuthenticated = (to, from, next) => {
    if (store.getters['user/isAuthenticated']) {
        mapRouteStack(to) && next()
        return
    }
    mapRouteStack(router.resolve({name: 'Auth'}).route) && next()
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
            meta: {
                hideFooter: true
            },
            children: [
                {
                    path: '/restore',
                    name: 'Restore',
                    component: {
                        extends: Restore
                    },
                    beforeEnter: ifNotAuthenticated,
                    meta: {
                        hideFooter: true
                    },

                    children: [
                        {
                            path: '/code',
                            name: 'Code',
                            component: {
                                extends: Code,
                                onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                            },
                            beforeEnter: ifNotAuthenticated,
                            meta: {
                                hideFooter: true
                            },
                            children: [
                                {
                                    path: '/newpassword',
                                    name: 'NewPassword',
                                    component: {
                                        extends: NewPassword,
                                        onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                                    },
                                    beforeEnter: ifNotAuthenticated,
                                    meta: {
                                        hideFooter: true
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
            beforeEnter: ifAuthenticated,
            children: [
                {
                    path: 'course',
                    name: 'Course',
                    component: {
                        extends: Course,
                        onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                    },
                    beforeEnter: ifAuthenticated,
                    children: [
                        {
                            path: 'material',
                            name: 'Material',
                            component: {
                                extends: Material,
                                onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                            },
                            beforeEnter: ifAuthenticated,
                            children: [
                                {
                                    path: 'test/:id',
                                    name: 'Test',
                                    component: {
                                        extends: Test,
                                        onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                                    },
                                    beforeEnter: ifAuthenticated,
                                    meta: {
                                        hideFooter: true
                                    },

                                },
                                {
                                    path: 'results',
                                    name: 'TestResults',
                                    component: {
                                        extends: TestResults,
                                        onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                                    },
                                    beforeEnter: ifAuthenticated,
                                    meta: {
                                        hideFooter: true
                                    },
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
            beforeEnter: ifAuthenticated,
            children: [
                {
                    path: 'mainmenu',
                    name: 'MainMenu',
                    component: {
                        extends: MainMenu,
                        onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                    },
                    beforeEnter: ifAuthenticated,
                    meta: {
                        hideFooter: true
                    },
                    children: [
                        {
                            path: ':slug',
                            name: 'MainMenuSlug',
                            component: {
                                extends: MainMenuSlug,
                                onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                            },
                            beforeEnter: ifAuthenticated,
                            meta: {
                                hideFooter: true
                            },
                        }
                    ]
                },
                {
                    path: 'favorite',
                    name: 'Favorite',
                    component: {
                        extends: Favorite,
                        onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                    },
                    beforeEnter: ifAuthenticated,
                    children: [
                        {
                            path: 'mainmenu',
                            name: 'MainMenu',
                            component: {
                                extends: MainMenu,
                                onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                            },
                            beforeEnter: ifAuthenticated,
                            meta: {
                                hideFooter: true
                            },
                            children: [
                                {
                                    path: ':slug',
                                    name: 'MainMenuSlug',
                                    component: {
                                        extends: MainMenuSlug,
                                        onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                                    },
                                    beforeEnter: ifAuthenticated,
                                    meta: {
                                        hideFooter: true
                                    },

                                }
                            ]

                        }
                    ]
                },
                {
                    path: 'structure',
                    name: 'Structure',
                    component: {
                        extends: Structure,
                        onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                    },
                    beforeEnter: ifAuthenticated,
                },
                {
                    path: 'course',
                    name: 'Course',
                    component: {
                        extends: Course,
                        onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                    },
                    beforeEnter: ifAuthenticated,
                    children: [
                        {
                            path: 'material',
                            name: 'Material',
                            component: {
                                extends: Material,
                                onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                            },
                            beforeEnter: ifAuthenticated,
                            meta: {
                                hideFooter: true
                            },
                            children: [
                                {
                                    path: 'test/:id',
                                    name: 'Test',
                                    component: {
                                        extends: Test,
                                        onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                                    },
                                   beforeEnter: ifAuthenticated,
                                    meta: {
                                        hideFooter: true
                                    },
                                },
                                {
                                    path: 'results',
                                    name: 'TestResults',
                                    component: {
                                        extends: TestResults,
                                        onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                                    },
                                    beforeEnter: ifAuthenticated,
                                    meta: {
                                        hideFooter: true
                                    }
                                }

                            ]
                        }
                    ]
                },

            ]
        },
        {
            path: '/certifications',
            name: 'Certifications',
            component: {
                extends: Certifications,
                onsNavigatorOptions: {animation: 'none'}
            },
            beforeEnter: ifAuthenticated,
            children: [
                {
                    path: ':slug/results',
                    name: 'CertificationResults',
                    component: {
                        extends: CertificationResults,
                        onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                    },
                    beforeEnter: ifAuthenticated,
                    meta: {
                        hideFooter: true
                    },

                },
                {
                    path: ':slug/:id',
                    name: 'Certification',
                    component: {
                        extends: Certification,
                        onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                    },
                    beforeEnter: ifAuthenticated,
                    meta: {
                        hideFooter: true
                    }
                },
            ]
        },
        {
            path: '/menu',
            name: 'Menu',
            component: {
                extends: Menu,
                onsNavigatorOptions: {animation: 'none'}
            },
           beforeEnter: ifAuthenticated,
           children: [
               {
                   path: 'edit',
                   name: 'Edit',
                   component: {
                       extends: Edit,
                       onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                   },
                   beforeEnter: ifAuthenticated,
                   meta: {
                       hideFooter: true
                   }
               },
               {
                   path: 'help',
                   name: 'Help',
                   component: {
                       extends: Help,
                       onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                   },
                   beforeEnter: ifAuthenticated,
                   meta: {
                       hideFooter: true
                   }
               },
               {
                   path: 'support',
                   name: 'Support',
                   component: {
                       extends: Support,
                       onsNavigatorOptions: {animation: 'slide', animationOptions: { duration: 0.5 }}
                   },
                   beforeEnter: ifAuthenticated,
                   meta: {
                       hideFooter: true
                   }
               }
           ]
        },
        {
            path: '/chat',
            name: 'Chat',
            component: {
                extends: Chat,
                onsNavigatorOptions: {animation: 'none'}
            },
           beforeEnter: ifAuthenticated
        }
    ]
});

const mapRouteStack = route => store.state['router'].pageStack = route.matched.map(m => m.components.default)
mapRouteStack(router.resolve({name: 'Splashscreen'}).route)
router.beforeEach((to, from, next) => {
    store.state['footer'].bShow = !to.meta.hideFooter
//    console.log(to)
    if (from.path !==to.path) {
        mapRouteStack(to) && next()
    }
});


export default router;