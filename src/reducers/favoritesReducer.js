import { handle } from 'redux-pack'

import { GET_FAVORITES, ADD_FAVORITE } from '../constants'

const initialState = {
    favorites: []
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FAVORITES:
            return handle(state, action, {
                start: state => ({
                    ...state,
                    fetchError: null
                }),
                finish: state => ({
                    ...state
                }),
                failure: state => ({
                    ...state,
                    fetchError: action.payload
                }),
                success: state => ({
                    ...state,
                    favorites: action.payload
                })
            })
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.concat(action.payload)
            }
        default:
            return { ...state }
    }
}

export default favoritesReducer



