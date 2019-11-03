import axios from 'axios'
import { nSQL } from 'nano-sql'

export function login({commit, rootGetters}, args) {
    let isset = rootGetters['helpers/isset']
    return new Promise((resolve, reject) => {
        commit('AUTH_REQUEST')
        axios.post('https://api.maestroresto.kaerus.eu/Authorization/Basic',
            JSON.stringify({
                email: args.email,
                password: args.password
            }),
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Device-Timezone': args.timezoneOffset,
                    'Device-Language': args.language,
                    'Device-App-Version': '1.0.0'
                }
            }
            )
            .then(response => {
                if (isset(response, 'data.error')) {
                    resolve({
                        error: {
                            type: response.data.error.type,
                            message: response.data.error.message
                        }
                    })
                }
                if (isset(response, 'data.result.access.token')) {
                    const token = response.data.result.access.token
                    axios.defaults.headers.common['Authorization'] = token
                    commit('AUTH_SUCCESS')
                    nSQL().onConnected(() => {
                        nSQL("user").query('upsert', {
                            token: token,
                            user: JSON.stringify(response.data.result.user)
                        }).exec().then(() => {
                            return nSQL().query('select').exec();
                        }).then((result) => {
                            console.log(result)
                        })
                    })

                    resolve({
                        token: token
                    })
                }
            })
            .catch(error => {
                commit('AUTH_ERROR')
                nSQL("user").query("drop").exec()
                reject(error)
            })
    })
}