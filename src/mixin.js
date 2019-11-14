import userDB from '@/db/userDB'
import { mapActions} from 'vuex'

export default {
    methods: {
        logout () {
            let that = this
            userDB.logout(() => {
                this.setToken({
                    token: '',
                    callback: response => {
                        if (response.logout) {
                            console.log(response)
                            that.$router.push('/auth')
                        }
                    }
                })
            })
        },
        ...mapActions({
            setToken: 'user/setToken'
        })
    }
};