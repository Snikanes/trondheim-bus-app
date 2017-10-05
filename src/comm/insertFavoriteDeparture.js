import Expo, { SQLite } from 'expo'

import setupDb from './setupDb'

const insertFavoriteDeparture = (locationId, line, direction) => {
    const db = SQLite.openDatabase({ name: 'bus.db' })

    return setupDb().then(() => {
        return new Promise((resolve, reject) => {
            db.transaction(trans => {
                trans.executeSql('INSERT INTO favorites(locationId, line, direction) VALUES(?, ?, ?)', [locationId, line, direction])
            }, reject, resolve)
        })
    })
}

export default insertFavoriteDeparture
