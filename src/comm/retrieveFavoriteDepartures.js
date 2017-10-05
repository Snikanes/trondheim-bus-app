import Expo, { SQLite } from 'expo'

import setupDb from './setupDb'

const retrieveFavoriteDepartures = () => {
    const db = SQLite.openDatabase({ name: 'bus.db' })

    return setupDb().then(() => {
        return new Promise((resolve, reject) => {
            db.transaction(trans => {
                trans.executeSql(
                    'SELECT * FROM favorites',
                    [],
                    (_, { rows: { _array } }) => resolve(_array),
                    err => reject(err)
                )
            })
        })
    })
}

export default retrieveFavoriteDepartures
