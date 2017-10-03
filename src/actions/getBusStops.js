import { GET_BUS_STOPS } from '../constants'
import haversine from 'haversine'

const getBusStops = (lat, long) => {
    const busStopsPromise = fetch(`http://bybussen-api.734sduu47i.eu-west-2.elasticbeanstalk.com/stops`)
        .then(result => result.json())
        .then(stops => stops.map(stop => {
            return {
                ...stop,
                distance: calculateDistance(stop, lat, long).toFixed(0)
            }
        }))

    return {
        type: GET_BUS_STOPS,
        promise: busStopsPromise
    }
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

export default getBusStops