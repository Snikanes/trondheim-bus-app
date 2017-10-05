import Expo, { SQLite } from 'expo'

import setupDb from './setupDb'

const deleteFavoriteDeparture = (locationId, line) => {
    const db = SQLite.openDatabase({ name: 'bus.db' })

    return setupDb().then(() => {
        return new Promise((resolve, reject) => {
            db.transaction(trans => {
                trans.executeSql('DELETE FROM favorites WHERE locationId = ? AND line = ?;', [Number(locationId), line])
            }, reject, resolve)
        })
    })
}

export default deleteFavoriteDeparture
