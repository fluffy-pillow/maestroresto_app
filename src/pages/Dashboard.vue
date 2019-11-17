<template>
    <v-ons-page class="dashboard" id="dashboard" @show="onShowPage">
        <User></User>
        <div class="bg-circles">
            <svg width="293" height="303" viewBox="0 0 293 303" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="146.5" cy="146.5" r="146" stroke="#F2F4F5"/>
                <circle cx="156.5" cy="176.5" r="126" stroke="#F2F4F5"/>
            </svg>
        </div>
        <MainDashboard :data="response"></MainDashboard>
    </v-ons-page>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import User from "@/components/Dashboard/User/User";
    import dashboardDB from "@/db/dashboardDB";
    import DashboardService from '@/services/DashboardService'
    import MainDashboard from "../components/Dashboard/MainDashboard";


    export default {
        name: "Dashboard",
        components: {
            MainDashboard,
            User,
        },
        data () {
            return {
                response: null,
                localDBerror: false,
            }
        },
        methods: {
            onShowPage () {
                this.showFooter()
            },
            ...mapActions({
                showFooter: 'footer/show',
                systemMessage: 'systemMessage/systemMessage'
            }),
            localDBRequest () {
                dashboardDB.getData(response => {
                    if (!response.error) {
                        this.response = response
                    } else {
                        this.localDBerror = true
                    }
                    this.serviceRequest()
                })
            },
            serviceRequest () {
                DashboardService.getData(this.token, response => {
                    if (response.error) {
                        this.systemMessage({type: 'error', message: response.error.message, duration: 5000})
                        if (response.error.type === 'USER_NOT_AUTHORIZED') {
                            this.logout()
                        }
                    } else {
                        this.response = response.data

                        if (this.localDBerror) {
                            dashboardDB.insertData(response.data)
                        } else {
                            dashboardDB.updateData(response.data)
                        }
                    }

                })
            },
        },
        computed: {
            ...mapGetters({
                token: 'user/getToken'
            })
        },
        mounted () {
            this.localDBRequest()
        }
    }
</script>

<style scoped>
.bg-circles {
  position: absolute;
  top: -88px;
  left: -75px;
  z-index: -1;
}

.dashboard {
  background-color: #ffffff !important
}
</style>
