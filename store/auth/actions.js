import AuthService from '@/services/AuthService'
import {isset} from '@/helpers'
import {navigationMixin} from '@/navigation'

export async function login ({commit}, data) {
    try {
        await new Promise((resolve, reject) => {
            AuthService.login(data)
            .then(response => {
                if (isset(response, 'data.result.access.token')) {
                    const token = response.data.result.access.token
                    commit('AUTH_SUCCESS', token)
                    resolve({
                        token: token
                    })
                    // TODO: router push
                    navigationMixin.methods.redir('Dashboard', {
                        animation: 'lift',
                        animationOptions: {duration: 0.5},
                    })
                    return
                }

                if (isset(response, 'data.error')) {
                    commit('AUTH_ERROR', {error: true, message: response.data.error.message})
                    resolve({
                        error: {
                            type: response.data.error.type,
                            message: response.data.error.message
                        }
                    })
                    return
                }
            }).catch(error => {
                console.log(error)
                commit('AUTH_ERROR', {error: true, message: 'Ошибка входа'})
                reject(error)
            })
        })
    } catch (e) {
        console.log('login error')
    }
}
