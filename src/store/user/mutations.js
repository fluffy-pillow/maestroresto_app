export const SET_TOKEN = (state, arg) => {
  localStorage.setItem('token', arg)
  state.token = arg
}

export const SET_TEMP_TOKEN = (state, arg) => {
  state.tempToken = arg
}

export const SET_RESTORE_CODE = (state, arg) => {
  state.restoreCode = arg
}

export const REMOVE_RESTORE_CODE = (state) => {
  state.restoreCode = ''
}

export const REMOVE_TEMP_TOKEN = (state) => {
  state.tempToken = ''
}

export const REMOVE_TOKEN = (state) => {
  localStorage.removeItem('token')
  state.token = ''
}