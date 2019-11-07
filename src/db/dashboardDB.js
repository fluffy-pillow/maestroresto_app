import { nSQL } from 'nano-sql'
import {isset} from '@/helpers'

const dashboardDB = {
    init: () => {
        nSQL("dashboard")
            .model([
                { key: 'id', type: 'int', props: ['pk', 'ai'] },
                { key: 'rating', type: 'string' },
                { key: 'required', type: 'string' },
                { key: 'unfinishedCourses', type: 'string' },
                { key: 'unfinishedCourses', type: 'string' },
            ])
            .config({
                mode: window.nSQLite.getMode() // required
            }).connect()
    },
/*    getDashboardData: async () => {
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
    }*/
}

export default dashboardDB
