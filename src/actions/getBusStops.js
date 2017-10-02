import { GET_BUS_STOPS } from '../constants'

const getBusStops = () => {
    const busStopsPromise = fetch('http://bybussen-api.734sduu47i.eu-west-2.elasticbeanstalk.com/stops')
        .then(result => result.json())

    return {
        type: GET_BUS_STOPS,
        promise: busStopsPromise
    }
}

export default getBusStops