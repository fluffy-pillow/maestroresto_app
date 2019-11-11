import Api from './Api'
import {isset} from '@/helpers'


const userService = {
    getData(token, callback) {
        Api.get('Profile/My', {headers: {
            'Token': token
            }}).then(
            response => {
                if (isset(response, 'data.result.user')) {
                    const user = response.data.result.user
                    callback({
                        firstName: user.firstName,
                        avatarUrl: user.avatarUrl
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
                    type: 'UNDEFINED_ERROR',
                    message: ''
                })

            },
            error => {
                callback({
                    error: {
                        type: 'NETWORK_ERROR',
                        message: error.message
                    }
                })
            }
        )
    }
}

export default userService