export function generateTimezoneOffset ({commit, getters}) {
    let offset = new Date().getTimezoneOffset()
    offset = ((offset < 0 ? '+' : '-') +
        getters.pad(parseInt(Math.abs(offset / 60)), 2) + ":" +
        getters.pad(Math.abs(offset % 60), 2))
    commit('WRITE_TIMEZONE_OFFSET', offset)
}