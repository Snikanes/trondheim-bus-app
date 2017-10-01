import { GET_BUS_STOPS } from '../constants'
import { handle } from 'redux-pack'

const initialState = {
    stops: [],
    isLoading: false,
    fetchError: null
}

const stopsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BUS_STOPS:
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
                    ...prevState,
                    stops: action.payload
                })
            })
        default:
            return state
    }
}

export default stopsReducer
