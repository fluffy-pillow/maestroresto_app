export function show({commit}) {
    commit('SHOW')
}

export function hide({commit}) {
  commit('HIDE')
}

export function setText({commit}, arg) {
  commit('SET_TEXT', arg)
}

export function setType({commit}, arg) {
  commit('SET_TYPE', arg)
}
