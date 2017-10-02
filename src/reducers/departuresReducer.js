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
                start: prevState => ({
                    ...prevState,
                    isLoading: true,
                    fetchError: null
                }),
                finish: prevState => ({
                    ...prevState,
                    isLoading: false
                }),
                failure: prevState => ({
                    ...prevState,
                    fetchError: action.payload
                }),
                success: prevState => ({
                    ...action.payload
                })
            })
        default:
            return state
    }
}

export default departuresReducer
