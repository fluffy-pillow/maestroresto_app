import { nSQL } from '@nano-sql/core'
import {isset} from '@/helpers'

const userDB = {
    insertData: (args, callback) => {
        nSQL("user").useDatabase("maestroresto_db").query('upsert', {
            token: args.token,
            user: JSON.stringify(args.user)
        }).exec().then((result) => {
            callback({
                inserted: true
            })
            return

        }).catch(() => {
            callback({
                error: {
                    type: 'NSQL_USERDB_INSERT_DATA_ERROR',
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
                    callback({
                        user: response[0].user
                    })
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
    logout: (callback) => {
        nSQL().dropDatabase("maestroresto_db").then(() => {
            callback({
                logout: true
            })
        }).catch(() => {
            callback({
                error: {
                    type: 'NSQL_DROP_DATABASE_ERROR',
                    message: ''
                }
            })
        })
    }
}

export default userDB