import { ADD_FAVORITE } from '../constants'
import { stateObjectFromDepartureAndFavorite } from './getFavorites'
import insertFavoriteDeparture from '../comm/insertFavoriteDeparture'
import fetchDepartures from '../comm/fetchDepartures'

const addFavorite = (locationId, line, direction) => {
    return dispatch => {
        return insertFavoriteDeparture(locationId, line, direction)
            .then(() => fetchDepartures(locationId))
            .then(({ next, name }) => {
                return dispatch({
                    type: ADD_FAVORITE,
                    payload: stateObjectFromDepartureAndFavorite({ next, name }, { locationId, line, direction })
                })
            })
    }
}

export default addFavorite

