import { GET_DEPARTURES } from '../constants'

const getDepartures = locationId => {
    const departuresPromise = fetch(`http://bybussen-api.734sduu47i.eu-west-2.elasticbeanstalk.com/rt/${locationId}`)
        .then(result => result.json())

    return {
        type: GET_DEPARTURES,
        promise: departuresPromise
    }
}
``
export default getDepartures