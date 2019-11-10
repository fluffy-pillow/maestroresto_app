export function setToken({commit}, args) {
    let bToken = !!args.token
    if (bToken) {
        commit('SET_TOKEN', args.token)
        args.callback({answer: 'ok'})
    } else {
        args.callback({answer: 'fail'})
    }
}