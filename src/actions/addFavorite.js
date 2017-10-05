import { ADD_FAVORITE } from '../constants'
import { stateObjectFromDepartureAndFavorite } from './getFavorites'
import insertFavoriteDeparture from '../comm/insertFavoriteDeparture'
import fetchDepartures from '../comm/fetchDepartures'

const addFavorite = (locationId, line) => {

    return dispatch => {
        return insertFavoriteDeparture(locationId, line)
            .then(() => fetchDepartures(locationId))
            .then(({ next, name, d }) => {
                return dispatch({
                    type: ADD_FAVORITE,
                    payload: stateObjectFromDepartureAndFavorite({ next, name, d }, { locationId, line })
                })
            })
            .catch(err => console.error(err))
    }
}

export default addFavorite

