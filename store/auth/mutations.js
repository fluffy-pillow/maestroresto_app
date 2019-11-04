export const AUTH_SUCCESS = (state, arg) => {
    state.token = arg
    state.bLoggedIn = true
}

export const AUTH_ERROR = (state, args) => {
    state.bLoggedIn = false
    state.bError = args.error
    state.errorMessage = args.message
}
