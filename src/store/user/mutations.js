export const SET_TOKEN = (state, arg) => {
  localStorage.setItem('token', arg)
  state.token = arg
}

export const REMOVE_TOKEN = (state) => {
  localStorage.removeItem('token')
  state.token = ''
}