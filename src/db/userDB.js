import { nSQL } from '@nano-sql/core'
import {isset} from '@/helpers'

const userDB = {
    insertData: async (args) => {
        return await new Promise((resolve, reject) => {
            nSQL("user").useDatabase("maestroresto_db").query('upsert', {
                token: args.token,
                user: JSON.stringify(args.user)
            }).exec().then((result) => {
                resolve(true)
            })
        })
    },
    getToken: async () => {
        return await new Promise((resolve, reject) => {
             nSQL("user").useDatabase("maestroresto_db").query("select", ["token"]).exec()
                 .then(response => {
                     if (isset(response[0], 'token')) {
                         resolve(response[0].token)
                         return
                     }

                     resolve('')
                })
                 .catch(error => {
                     console.log(error)
                     resolve('')
                 })

        })
    },
    getUserData: async () => {
        return await new Promise((resolve, reject) => {
            nSQL("user").useDatabase("maestroresto_db").query("select", ["user"]).exec()
                .then(response => {
                    if (isset(response[0], 'user')) {
                        resolve(response[0].user)
                        return
                    }

                    resolve('[]')
                })
                .catch(error => {
                    resolve('[]')
                })

        })
    },
    logout: () => {
        nSQL('user')
            .useDatabase("maestroresto_db")
            .query('delete')
            .exec()
            .then(rows => {
                console.log(rows)
            })
    }
}

export default userDB