import { nSQL } from 'nano-sql'

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
    insertData: (args) => {
        nSQL().onConnected(() => {
            nSQL("user").query('upsert', {
                token: args.token,
                user: JSON.stringify(args.user)
            }).exec().then(() => {
                return nSQL().query('select').exec();
            }).then((result) => {
                console.log(result)
            })
        })
    },
    getToken: () => {
        return nSQL("user").query("select", ["token"]).exec()
    }
}

export default userDB