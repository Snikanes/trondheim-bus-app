import { SET_SELECTED_STOP } from '../constants'

const setSelectedStop = stop => {

    return {
        type: SET_SELECTED_STOP,
        payload: stop
    }
}

export default setSelectedStop