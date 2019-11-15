import userDB from '@/db/userDB'
import { mapActions} from 'vuex'

export default {
    methods: {
        logout () {
            userDB.logout(response => {
                this.removeToken()
                this.$router.push('/auth', () => {})
            })
        },
        ...mapActions({
            removeToken: 'user/removeToken'
        })
    }
};