import { GET_DEPARTURES } from '../constants'
import fetchDepartures from '../comm/fetchDepartures'

const getDepartures = locationId => {
    return {
        type: GET_DEPARTURES,
        promise: fetchDepartures(locationId)
    }
}

export default getDepartures