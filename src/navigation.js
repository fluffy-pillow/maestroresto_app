import Vue from "vue";

import Dashboard from "@/pages/Dashboard"
import Learning from "@/pages/Learning"
import Certification from "@/pages/Certification"
import Menu from "@/pages/Menu"
import Auth from "@/pages/Auth"
import Restore from "@/pages/Restore"
import Code from "@/pages/Code"
import NewPassword from "@/pages/NewPassword"
import Course from "@/pages/Course"
import Material from "@/pages/Course/Materials/Material"


Vue.prototype.$eventBus = new Vue()

const router = [
    {
        name: 'Dashboard',
        component: Dashboard
    },
    {
      name: 'Auth',
      component: Auth
    },
    {
        name: 'Learning',
        component: Learning
    },
    {
        name: 'Certification',
        component: Certification
    },
    {
        name: 'Menu',
        component: Menu
    },
    {
        name: 'Restore',
        component: Restore
    },
    {
        name: 'Code',
        component: Code
    },
    {
        name: 'NewPassword',
        component: NewPassword
    },
    {
        name: 'Course',
        component: Course
    },
    {
        name: 'Material',
        component: Material
    }
]

const navigationMixin = {
  methods: {
    redir (pageName, options = {animation: 'none', animationOptions: {duration: 0}}, swipeable = false, removePrevPage = true, fromFooter = false) {
      this.$eventBus.$emit('change-page',
        {
          extends: router.filter(item => item.name === pageName)[0].component,
          onsNavigatorOptions: options,
          removePrevPage: removePrevPage,
          fromFooter: fromFooter,
          swipeable: swipeable
        }
      )
    },
    returnToRootPage () {
      this.$eventBus.$emit('return-to-root-page')
    }
  }
}

const navigation = {
    name: 'Navigation',
    template: `<v-ons-navigator
         animation="none"
         :page-stack="pageStack"
         :swipeable="swipeable"
    ></v-ons-navigator>`,
    data () {
        return {
            pageStack: [router[0].component],
            swipeable: false
        }
    },
    methods: {
        onChangePage (e) {
            this.swipeable = e.swipeable
            if (e.fromFooter) {
                if (this.pageStack.length > 1) this.pageStack.shift()
            }
            if (e.removePrevPage || typeof e.removePrevPage === 'undefined') {
              this.pageStack.pop()
            }
            this.pageStack.push(e)
        },
      onReturnRootPage () {
          this.pageStack.splice(1)
        }
    },
    created () {
        this.$eventBus.$on('change-page', this.onChangePage)
        this.$eventBus.$on('return-to-root-page', this.onReturnRootPage)
    },
    beforeDestroy() {
        this.$eventBus.$off('change-page')
        this.$eventBus.$off('return-to-root-page')
    }
}


export {navigation, navigationMixin}
