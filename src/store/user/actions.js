export function setToken({commit}, args) {
    let bToken = !!args.token
    if (bToken) {
        commit('SET_TOKEN', args.token)
        args.callback(
            {ok: true}
        )
    } else {
        args.callback(
            {
                error: {
                    type: 'VUEX_FAILED_TO_SET_TOKEN',
                    message: ''
                }
            }
        )
    }
}