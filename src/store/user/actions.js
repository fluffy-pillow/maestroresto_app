export function setToken({commit}, arg) {
  commit('SET_TOKEN', arg)
}

export function removeToken({commit}) {
  commit('REMOVE_TOKEN')
}