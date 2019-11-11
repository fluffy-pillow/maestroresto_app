import { nSQL } from '@nano-sql/core'
import {isset, empty} from '@/helpers'

const dashboardDB = {
    insertData: (args, callback = null) => {
        nSQL("dashboard").useDatabase("maestroresto_db").query('upsert',
            {
                rating: JSON.stringify(args.rating),
                required: JSON.stringify(args.required),
                unfinishedCourses: JSON.stringify(args.unfinishedCourses),
                unfinishedTests: JSON.stringify(args.unfinishedTests)
            }
        ).exec().then((result) => {
            if (callback) {
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
    getData: (callback) => {
        nSQL().query("show tables").exec().then((rows) => {
            console.log(rows);
            /*
            [
                {table: "users"},
                {table: "posts"},
                ...
            ]
            */
        });
        nSQL("dashboard").useDatabase("maestroresto_db").query("select").exec()
            .then(response => {
                if (!empty(response)) {
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
    }

}

export default dashboardDB
