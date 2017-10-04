import retrieveFavoriteDepartures from '../comm/retrieveFavoriteDepartures'
import fetchDepartures from '../comm/fetchDepartures'

const getFavorites = () => {

    return dispatch => {
        return retrieveFavoriteDepartures()
            .then(favorites => dispatch({
                type: '',
                promise: Promise.all(favorites.map(favorite => fetchDepartures(favorite.locationId)))
            }))
    }
}

export default getFavorites

