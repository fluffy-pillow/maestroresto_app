<template>
    <footer class="footer" :class="{iphonex: $ons.platform.isIPhoneX(), fade: !bShow}">
        <ul>
            <li
                v-for="(link, key) of links"
                :key="key"
                :class="[link.class, {active: activeLink === key}]"
                @click="changeActiveLink(key)"
                >
                    <button
                        @click="to(link.to)"

                    >
                        <span class="button-inner-wrapper">
                            <span class="button-icon">
                            </span>
                            <span class="button-text">
                                {{link.label}}
                            </span>
                        </span>
                    </button>
            </li>
        </ul>
    </footer>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Footer",
        data () {
            return {
                bFade: false,
                activeLink: 0,
                links: [
                    {
                        label: 'Главный',
                        class: 'dashboard-tab',
                        to: '/dashboard'
                    },
                    {
                        label: 'Обучение',
                        class: 'learning-tab',
                        to: '/learning'
                    },
                    {
                        label: 'Чат',
                        class: 'chat-tab',
                        to: '/chat'
                    },
                    {
                        label: 'Аттестации',
                        class: 'certifications-tab',
                        to: '/certifications'
                    },
                    {
                        label: 'Меню',
                        class: 'menu-tab',
                        to: '/menu'
                    }
                ]
            }
        },
        methods: {
            changeActiveLink(newLinkID) {
                this.activeLink = newLinkID
            },
            to (path) {
                if ('/' + this.$route.path !== path) this.$router.push(path, () => {})
            }
        },
        computed: {
            ...mapGetters({
                bShow: 'footer/isShow'
            })
        }
    }
</script>

<style scoped>
.footer {
    background: #FFFFFF;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.06);
    height: 49px;
    border-top-left-radius: 20px;
    position: absolute;
    bottom: 0;
    border-top-right-radius: 20px;
    width: 100%;
    z-index: 2;
    opacity: 1;
    visibility: visible;
}

.footer.fade {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
}

.footer.iphonex {
    padding-bottom: 32px;
}

ul {
    display: flex;
    height: inherit;
}

li {
    flex: 1;
}


li.active .button-text {
    color: #3DD498;
}

button {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.button-inner-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

li.active .button-inner-wrapper {

}

.button-text {
    font-size: 10px;
    line-height: 12px;
    color: #61707D;
    margin-top: 6px;
}

.dashboard-tab .button-icon {
    background-image: url(../assets/images/dashboard.svg);
}

.learning-tab .button-icon {
    background-image: url(../assets/images/learning.svg);
}

.certifications-tab .button-icon {
    background-image: url(../assets/images/certifications.svg);
}

.menu-tab .button-icon {
    background-image: url(../assets/images/menu.svg);
}

.menu-tab.active .button-icon {
    background-image: url(../assets/images/menu-active.svg);
}

.chat-tab .button-icon {
    background-image: url(../assets/images/chat.svg);
}

.chat-tab.active .button-icon {
    background-image: url(../assets/images/chat-active.svg);
}

.button-icon {
    background-repeat: no-repeat;
    background-position: 50% 50%;
    width: 22px;
    height: 22px;
    min-width: 22px;
}
</style>
