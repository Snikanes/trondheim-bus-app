import Expo, { SQLite } from 'expo'

const setupDb = () => {
    const db = SQLite.openDatabase({ name: 'bus.db' })
    return teardownTables(db).then(() => setupTables(db))
    //return setupTables(db)
}

const setupTables = db => {
    return new Promise((resolve, reject) => {
        db.transaction(trans => {
            trans.executeSql(`CREATE TABLE IF NOT EXISTS favorites (
              id         INTEGER PRIMARY KEY NOT NULL,
              locationId INTEGER,
              line       TEXT,
              direction  TEXT
            );`)
        }, reject, resolve)
    })
}

const teardownTables = db => {
    return new Promise((resolve, reject) => {
        db.transaction(trans => {
            trans.executeSql(`DROP TABLE favorites;`)
        }, reject, resolve)
    })
}

export default setupDb