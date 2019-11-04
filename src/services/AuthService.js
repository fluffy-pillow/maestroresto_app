import ApiAdmin from './config/Api'

const AuthService = {
    login(data) {
        return ApiAdmin.post('Authorization/Basic', data)
    },
}

export default AuthService