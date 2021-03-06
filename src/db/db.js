import { nSQL } from '@nano-sql/core'

const db = {
    init: (callback) => {
        nSQL().createDatabase({
            id: "maestroresto_db", // can be anything that's a string
            mode: "PERM",
            tables: [ // tables can be created as part of createDatabase or created later with create table queries
                {
                    name: "user",
                    model: {
                        "id:uuid": {pk: true, ai: true},
                        "token:string": {},
                        "user:string": {}
                    }
                },
                {
                    name: "dashboard",
                    model: {
                        "id:int": {pk: true},
                        "rating:string": {},
                        "required:string": {},
                        "unfinishedCourses:string": {},
                        "unfinishedTests:string": {}
                    }
                }
            ],
            version: 3, // current schema/database version
            onVersionUpdate: (prevVersion) => { // migrate versions
                return new Promise((res, rej) => {
                    switch (prevVersion) {
                        case 1:
                            // migrate v1 to v2
                            res(2);
                            break;
                        case 2:
                            // migrate v2 to v3
                            res(3);
                            break;
                    }

                });
            }
        }).then(() => {
            callback({
                ready: true
            });


            // ready to query!
        }).catch(() => {
            callback({
                error: true,
                message: 'Error creating database'
            });
            // ran into a problem
        });
    }

}

export default db