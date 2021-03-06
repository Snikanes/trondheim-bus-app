import { GET_FAVORITES } from '../constants'
import retrieveFavoriteDepartures from '../comm/retrieveFavoriteDepartures'
import fetchDepartures from '../comm/fetchDepartures'

const getFavorites = () => {

    return dispatch => {
        return retrieveFavoriteDepartures()
            .then(favorites => {
                dispatch({
                    type: GET_FAVORITES,
                    promise: Promise.all(favorites.map(favorite => fetchDepartures(favorite.locationId)
                        .then(departures => stateObjectFromDepartureAndFavorite(departures, favorite))))
                })
            })
    }
}

export const stateObjectFromDepartureAndFavorite = ({ next, name }, { locationId, line, direction, id }) => {
    return {
        id: id,
        locationId: locationId,
        name: name,
        direction: direction,
        line: line,
        departures: next.filter(departure => departure.l === line)
    }
}

export default getFavorites