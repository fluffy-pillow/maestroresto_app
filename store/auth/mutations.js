export const AUTH_REQUEST = (state) => {
    state.status = 'loading'
}

export const AUTH_SUCCESS = (state) => {
    state.status = 'success'
    state.bLoggedIn = true
}

export const AUTH_ERROR = (state) => {
    state.status = 'error'
}

export const LOGOUT = (state) => {
    state.bLoggedIn = false
}