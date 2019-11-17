import { nSQL } from '@nano-sql/core'
import {isset} from '@/helpers'

const userDB = {
    insertData: (args, callback = null) => {
        nSQL("user").useDatabase("maestroresto_db").query("delete").exec()
        nSQL("user").useDatabase("maestroresto_db").query('upsert', {
            token: args.token,
            user: JSON.stringify(args.user)
        }).exec().then((result) => {
            if (callback) {
                callback({
                    inserted: true
                })
                return
            }

        }).catch(() => {
            callback({
                error: {
                    type: 'NSQL_USERDB_INSERT_DATA_ERROR',
                    message: ''
                }
            })
        })
    },
    updateData: (args, callback = null) => {
        nSQL("user").useDatabase("maestroresto_db").query('upsert', {
            token: args.token,
            user: JSON.stringify(args.user)
        }).where(["id", "=", 1]).exec().then((result) => {
            if (callback) {
                callback({
                    updated: true
                })
                return
            }

        }).catch(() => {
            callback({
                error: {
                    type: 'NSQL_DASHBOARDDB_UPDATE_DATA_ERROR',
                    message: ''
                }
            })
        })
    },
    getToken: (callback) => {
        nSQL("user").useDatabase("maestroresto_db").query("select", ["token"]).exec()
            .then(response => {
                if (isset(response[0], 'token')) {
                    callback({
                        token: response[0].token
                    })
                    return
                }

                callback({
                    error: {
                        type: 'NSQL_USERDB_TOKEN_NOT_FOUND',
                        message: ''
                    }
                })
            })
            .catch(() => {
                callback({
                    error: {
                        type: 'NSQL_USERDB_CONNECTION_ERROR',
                        message: ''
                    }
                })
            })

    },
    getData: (callback) => {
        nSQL("user").useDatabase("maestroresto_db").query("select", ["user"]).exec()
            .then(response => {
                if (isset(response[0], 'user')) {
                    callback(JSON.parse(response[0].user))
                    return
                }

                callback({
                    error: {
                        type: 'NSQL_USERDB_USER_DATA_NOT_FOUND',
                        message: ''
                    }
                })
            })
            .catch(() => {
                callback({
                    error: {
                        type: 'NSQL_USERDB_CONNECTION_ERROR',
                        message: ''
                    }
                })
            })
    },
    deleteData: () => {
        nSQL("user").useDatabase("maestroresto_db").query("delete").exec()
    }
}

export default userDB