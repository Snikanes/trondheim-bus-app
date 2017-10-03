import getBusStops from './getBusStops'

const getNearbyStops = locationApi => {

    const locationPromise = new Promise((resolve, reject) => locationApi.getCurrentPosition(resolve, reject))

    return dispatch => {
        return locationPromise
            .then(({coords, timestamp}) => dispatch(getBusStops(coords.latitude, coords.longitude)))
    }
}

export default getNearbyStops