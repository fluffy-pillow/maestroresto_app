import userDB from '@/db/userDB'
import dashboardDB from '@/db/dashboardDB'
import { mapActions} from 'vuex'

export default {
    methods: {
        logout () {
            userDB.deleteData()
            dashboardDB.deleteData()
            this.removeToken()
            this.$router.push('/auth', () => {})
        },
        ...mapActions({
            removeToken: 'user/removeToken'
        })
    }
};