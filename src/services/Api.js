import axios from 'axios'
import {timezoneOffset} from '@/helpers'


let API = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    crossdomain: true,
    headers: {
        'Accept': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Device-Timezone': timezoneOffset(),
        'Device-Language': process.env.VUE_APP_I18N_LOCALE || 'en',
        'Device-App-Version': '1.0.0'
    }
})

export default API