import { nSQL } from 'nano-sql'
import {isset} from '@/helpers'

const userDB = {
    init: () => {
        nSQL("user")
            .model([
                { key: 'id', type: 'int', props: ['pk', 'ai'] },
                { key: 'token', type: 'string' },
                { key: 'user', type: 'string' }
            ])
            .config({
                mode: window.nSQLite.getMode() // required
            }).connect()
    },
    insertData: async (args) => {
        return await new Promise((resolve, reject) => {
            nSQL().onConnected(() => {
                nSQL("user").query('upsert', {
                    token: args.token,
                    user: JSON.stringify(args.user)
                }).exec().then((result) => {
                    resolve(true)
                })
            })
        })
    },
    getToken: async () => {
        return await new Promise((resolve, reject) => {
             nSQL("user").query("select", ["token"]).exec()
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
            nSQL("user").query("select", ["user"]).exec()
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
            .query('delete')
            .exec()
            .then(rows => {
                console.log(rows)
            })
    }
}

export default userDB