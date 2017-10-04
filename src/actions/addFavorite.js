import { ADD_FAVORITE } from '../constants'
import insertFavoriteDeparture from '../comm/insertFavoriteDeparture'
import fetchDepartures from '../comm/fetchDepartures'

const addFavorite = (locationId, line) => {

    return dispatch => {
        return insertFavoriteDeparture(locationId, line)
            .then(() => fetchDepartures(locationId))
            .then(({next, name, d}) => {
                return dispatch({
                    type: ADD_FAVORITE,
                    payload:  {
                        locationId: locationId,
                        name: name,
                        direction: d,
                        line: line,
                        departures: next.filter(departure => departure.l === line)
                    }
                })
            })
            .catch(err => console.error(err))
    }
}

export default addFavorite

