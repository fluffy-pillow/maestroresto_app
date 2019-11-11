import Api from './Api'
import {isset} from '@/helpers'


const dashboardService = {
    getData(token, callback) {
        Api.get('Dashboard/List', {headers: {
                'Token': token
            }}).then(
            response => {
                if (isset(response, 'data.result')) {
                    const result = response.data.result
                    callback({
                        data: result
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

export default dashboardService