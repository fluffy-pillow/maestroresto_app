export function setToken({commit}, arg) {
  commit('SET_TOKEN', arg)
}

export function setTempToken({commit}, arg) {
  commit('SET_TEMP_TOKEN', arg)
}

export function removeToken({commit}) {
  commit('REMOVE_TOKEN')
}

export function removeTempToken({commit}) {
  commit('REMOVE_TEMP_TOKEN')
}

export function removeRestoreCode({commit}) {
  commit('REMOVE_RESTORE_CODE')
}

export function setRestoreCode({commit}, arg) {
  commit('SET_RESTORE_CODE', arg)
}