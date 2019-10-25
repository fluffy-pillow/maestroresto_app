export const SHOW = (state) => {
  state.bShow = true
}

export const HIDE = (state) => {
  state.bShow = false
}

export const SET_TEXT = (state, arg) => {
  state.text = arg
}

export const SET_TYPE = (state, arg) => {
  state.type = arg
}
