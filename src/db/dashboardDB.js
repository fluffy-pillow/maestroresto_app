import { nSQL } from '@nano-sql/core'
import {isset, empty} from '@/helpers'

const dashboardDB = {
    insertData: (args, callback = null) => {
        nSQL("dashboard").useDatabase("maestroresto_db").query("delete").exec()
        nSQL("dashboard").useDatabase("maestroresto_db").query('upsert',
            {
                rating: JSON.stringify(args.rating),
                required: JSON.stringify(args.required),
                unfinishedCourses: JSON.stringify(args.unfinishedCourses),
                unfinishedTests: JSON.stringify(args.unfinishedTests)
            }
        ).exec().then((result) => {
            console.log('insert data:', result)
            if (isset(result) && callback) {
                callback({
                    inserted: true
                })
                return
            }

        }).catch(() => {
            callback({
                error: {
                    type: 'NSQL_DASHBOARDDB_INSERT_DATA_ERROR',
                    message: ''
                }
            })
        })
    },
    updateData: (args, callback = null) => {
        nSQL("dashboard").useDatabase("maestroresto_db").query('upsert',
            {
                rating: JSON.stringify(args.rating),
                required: JSON.stringify(args.required),
                unfinishedCourses: JSON.stringify(args.unfinishedCourses),
                unfinishedTests: JSON.stringify(args.unfinishedTests)
            }
        ).where(["id", "=", 1]).exec().then((result) => {
            console.log('updated data:', result)
            if (isset(result) && callback) {
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
    getData: (callback) => {

        nSQL("dashboard").useDatabase("maestroresto_db").query("select").exec()
            .then(response => {
                if (!empty(response[0])) {
                    callback(response[0])
                    return
                }

                callback({
                    error: {
                        type: 'NSQL_DASHBOARDDB_DASHBOARD_DATA_NOT_FOUND',
                        message: ''
                    }
                })
            })
            .catch(() => {
                callback({
                    error: {
                        type: 'NSQL_DASHBOARDDB_CONNECTION_ERROR',
                        message: ''
                    }
                })
            })
    },
    deleteData: () => {
        nSQL("dashboard").useDatabase("maestroresto_db").query("delete").exec()
    }
}

export default dashboardDB
