import { GET_DEPARTURES } from '../constants'
import { handle } from 'redux-pack'

const initialState = {
    isLoading: false,
    fetchError: null,
    name: '',
    locationId: null,
    next: []
}

const departuresReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DEPARTURES:
            return handle(state, action, {
                start: state => ({
                    ...state,
                    isLoading: true,
                    fetchError: null
                }),
                finish: state => ({
                    ...state,
                    isLoading: false
                }),
                failure: state => ({
                    ...state,
                    fetchError: action.payload
                }),
                success: state => ({
                    ...state,
                    name: action.payload.name,
                    locationId: action.payload.locationId,
                    next: action.payload.next ? action.payload.next : []
                })
            })
        default:
            return state
    }
}

export default departuresReducer
