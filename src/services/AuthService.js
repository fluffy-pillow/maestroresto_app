import Api from './Api'
import {isset} from '@/helpers'

const AuthService = {
    login(data, callback) {
        Api.post('Authorization/Basic', data).then(
            response => {
                if (isset(response, 'data.result.access.token')) {
                    const token = response.data.result.access.token
                    const user = response.data.result.user
                    callback({
                        token: token,
                        user: user
                    })
                    return
                }
                if (isset(response, 'data.error')) {
                    callback({
                        error: {
                            type: response.data.error.type,
                            message: response.data.error.message
                        }
                    })
                    return
                }

                callback({
                    error: {
                        type: 'UNDEFINED_ERROR',
                        message: ''
                    }
                })
            },
            error => {
                callback({
                    error: {
                        type: 'NETWORK_ERROR',
                        message: error.message
                    }
                })
            })
        }
}

export default AuthService