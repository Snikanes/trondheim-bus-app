import { GET_BUS_STOPS } from '../constants'

const getBusStops = () => {
    const busStopsPromise = fetch('https://atbapi.tar.io/api/v1/busstops')
        .then(result => result.json())
        .then(json => json.stops)

    return {
        type: GET_BUS_STOPS,
        promise: busStopsPromise
    }
}

export default getBusStops