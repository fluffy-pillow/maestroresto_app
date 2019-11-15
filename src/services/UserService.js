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
                if (isset(error, 'response.status') && error.response.status === 401) {
                    callback({
                        error: {
                            type: 'USER_NOT_AUTHORIZED',
                            message: 'Вы не авторизованы'
                        }
                    })
                    return
                }

                callback({
                    error: {
                        type: 'NETWORK_ERROR',
                        message: 'Ошибка соединения'
                    }
                })
            }
        )
    }
}

export default userService