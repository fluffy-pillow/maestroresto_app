import userDB from '@/db/userDB'
import { mapActions} from 'vuex'

export default {
    methods: {
        logout () {
            userDB.logout(() => {
                let that = this
                this.setToken({
                    token: '',
                    callback: response => {
                        if (response.ok) {
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