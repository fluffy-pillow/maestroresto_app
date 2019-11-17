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
        },
    forgetMyPassword(data, callback) {
        Api.post('Authorization/ForgetMyPassword', data).then(
            response => {
                if (isset(response, 'data.result.token')) {
                    const token = response.data.result.token
                    callback({
                        token: token
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
    },
    validate(data, callback) {
        Api.post('Authorization/Validate', data).then(
            response => {
                if (isset(response, 'data.result.success')) {
                    callback({
                        success: true
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
    },
    changePasswordByToken(data, callback) {
        Api.post('Authorization/ChangePasswordByToken', data).then(
            response => {
                if (isset(response, 'data.result.success')) {
                    callback({
                        success: true
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