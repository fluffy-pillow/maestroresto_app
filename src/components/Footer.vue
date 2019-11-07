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
                        to: '/Dashboard'
                    },
                    {
                        label: 'Обучение',
                        class: 'learning-tab',
                        to: '/Learning'
                    },
                    {
                        label: 'Аттестация',
                        class: 'certification-tab',
                        to: '/Certification'
                    },
                    {
                        label: 'Меню',
                        class: 'menu-tab',
                        to: '/Menu'
                    }
                ]
            }
        },
        methods: {
            changeActiveLink(newLinkID) {
                this.activeLink = newLinkID
            },
            to (pageName) {
                if ('/' + this.$route.name !== pageName) this.$router.push(pageName)
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

li.active {
    flex: unset;
    width: 140px;
}

li.active .button-text {
    display: flex;
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
    width: 22px;
    align-items: center;
    justify-content: center;
    height: 30px;
}

li.active .button-inner-wrapper {
    width: auto;
    background: #3DD498;
    border-radius: 20px;
    padding-left: 12px;
    padding-right: 12px;
    display: flex;
}

.button-text {
    display: none;
    margin-left: 10px;
    letter-spacing: 0.16px;
    font-size: 12px;
    line-height: 16px;
    color: #FFFFFF;
}

.dashboard-tab .button-icon {
    background-image: url(../assets/images/dashboard.svg);
}

.learning-tab .button-icon {
    background-image: url(../assets/images/learning.svg);
}

.certification-tab .button-icon {
    background-image: url(../assets/images/certification.svg);
}

.menu-tab .button-icon {
    background-image: url(../assets/images/menu.svg);
}

.dashboard-tab.active .button-icon {
    background-image: url(../assets/images/dashboard-active.svg);
}

.learning-tab.active .button-icon {
    background-image: url(../assets/images/learning-active.svg);
}

.certification-tab.active .button-icon {
    background-image: url(../assets/images/certification.svg);
}

.menu-tab.active .button-icon {
    background-image: url(../assets/images/menu.svg);
}

.button-icon {
    background-repeat: no-repeat;
    background-position: 50% 50%;
    width: 22px;
    height: 22px;
    min-width: 22px;
}
</style>
