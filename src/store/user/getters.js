export const getToken = (state) => state.token
export const getTempToken = (state) => state.tempToken
export const getRestoreCode = (state) => state.restoreCode
export const isAuthenticated = (state) => !!state.token
