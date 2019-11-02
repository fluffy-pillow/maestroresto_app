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
      name: 'Auth',
      component: Auth
    },
    {
        name: 'Dashboard',
        component: Dashboard
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
    redir (pageName, options = {animation: 'none', animationOptions: {duration: 0}}, removePrevPage = true, fromFooter = false) {
      this.$eventBus.$emit('change-page',
        {
          extends: router.filter(item => item.name === pageName)[0].component,
          onsNavigatorOptions: options,
          removePrevPage: removePrevPage,
          fromFooter: fromFooter
        }
      )
    },
    returnToRootPage () {
      this.$eventBus.$emit('return-to-root-page')
    }
  }
}

const navigationButton = {
    name: 'NavigationButton',
    template: `
        <button @click="changePage(to)">
        <slot></slot>
        </button>
    `,
    methods: {
        changePage (pageName) {
            if (pageName.length > 0) {
              this.$eventBus.$emit('change-page',
                {
                  extends: router.filter(item => item.name === pageName)[0].component,
                  onsNavigatorOptions: this.options,
                  removePrevPage: this.removePrevPage
                }
              )
            }
        }
    },
    props: {
        to: String,
        options: {
          type: Object,
          default: () => ({
            animation: 'none',
            animationOptions: {duration: 0},
          })
        },
        removePrevPage: {
          type: Boolean,
          default: true
        }
    },
    watch: {
      to: function (newValue) {
        this.changePage(newValue)
      }
    }
}

const navigation = {
    name: 'Navigation',
    template: `<v-ons-navigator
         animation="none"
         :page-stack="pageStack"
    ></v-ons-navigator>`,
    data () {
        return {
            pageStack: [router[0].component]
        }
    },
    methods: {
        onChangePage (e) {
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


export {navigationButton, navigation, navigationMixin}
