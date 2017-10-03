import { GET_BUS_STOPS, SEARCH_TEXT_CHANGED, REQUEST_LOCATION } from '../constants'
import { handle } from 'redux-pack'
import haversine from 'haversine'

const initialState = {
    searchText: '',
    stops: [],
    filteredStops: [],
    isLoading: false,
    fetchError: null
}

const stopsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BUS_STOPS:
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
                    stops: action.payload,
                    filteredStops: filterStops(state.searchText, action.payload)
                })
            })
        case SEARCH_TEXT_CHANGED:
            return {
                ...state,
                searchText: action.payload,
                filteredStops: filterStops(action.payload, state.stops)
            }
        default:
            return state
    }
}

const filterStops = (searchText, allStops) => {
    return (searchText.length > 0
        ? allStops.filter(stop => stop.name.toLowerCase().includes(searchText.toLowerCase()))
        : allStops).sort((a, b) => a.distance - b.distance)
}

export default stopsReducer
