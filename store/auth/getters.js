import { nSQL } from 'nano-sql'

export const isLoggedIn = (state) => {
    if (!state.bLoggedIn) {
        (async () => {
            const response = await nSQL("user").query("select", ["token"]).exec()
            state.bLoggedIn = (response.length > 0 && response[0].token.length > 0)

        })(state.bLoggedIn)
    }

    return state.bLoggedIn
}
