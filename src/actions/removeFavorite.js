import { REMOVE_FAVORITE } from '../constants'
import deleteFavoriteDeparture from '../comm/deleteFavoriteDeparture'

const removeFavorite = (locationId, line) => {
    return dispatch => {
        return deleteFavoriteDeparture(locationId, line)
            .then(() => {
                dispatch({
                    type: REMOVE_FAVORITE,
                    payload: {
                        locationId: locationId,
                        line: line
                    }
                })
            })
    }
}

export default removeFavorite

