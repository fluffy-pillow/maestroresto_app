import axios from 'axios'

function pad (number, length) {
    let str = "" + number
    while (str.length < length) {
        str = '0'+str
    }
    return str
}

function timezoneOffset ()  {
    let offset = new Date().getTimezoneOffset()
    offset = ((offset < 0 ? '+' : '-') +
        pad(parseInt(Math.abs(offset / 60)), 2) + ":" +
        pad(Math.abs(offset % 60), 2))
    return offset
}

const API_URL_MAESTRORESTO = 'https://api.maestroresto.kaerus.eu/'

let API = axios.create({
    baseURL: API_URL_MAESTRORESTO,
    headers: {
        'Accept': 'application/json; charset=utf-8',
        'Content-Type': 'application/json',
        'Device-Timezone': timezoneOffset(),
        'Device-Language': process.env.VUE_APP_I18N_LOCALE || 'en',
        'Device-App-Version': '1.0.0'
    }
})

export default API