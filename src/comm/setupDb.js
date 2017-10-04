import Expo, { SQLite } from 'expo'

const setupDb = () => {
    const db = SQLite.openDatabase({ name: 'bus.db'})

    return new Promise((resolve, reject) => {
        db.transaction(trans => {
            trans.executeSql(`CREATE TABLE IF NOT EXISTS favorites (
              id         INTEGER PRIMARY KEY NOT NULL,
              locationId INTEGER,
              line       TEXT
            );`)
        }, reject, resolve)
    })
}

export default setupDb