import { GET_BUS_STOPS } from '../constants'
import haversine from 'haversine'

import fetchBusStops from '../comm/fetchBusStops'

const augmentWithDistances = (stops, lat, long) => {
    return stops.map(stop => {
        return {
            ...stop,
            distance: calculateDistance(stop, lat, long).toFixed(0)
        }
    })
}

const calculateDistance = (stop, lat, long) => {
    const start = {
        latitude: lat,
        longitude: long
    }
    const end = {
        latitude: stop.latitude,
        longitude: stop.longitude
    }
    return haversine(start, end, {unit: 'meter'})
}

const getNearbyStops = locationApi => {
    const locationPromise = new Promise((resolve, reject) => locationApi.getCurrentPosition(resolve, reject))

    return dispatch => {
        return locationPromise.then(({coords, timestamp}) => dispatch({
            type: GET_BUS_STOPS,
            promise: fetchBusStops.then(stops => augmentWithDistances(stops, coords.latitude, coords.longitude))
        }))
    }
}

export default getNearbyStops