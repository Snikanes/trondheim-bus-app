import { handle } from 'redux-pack'

import { GET_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../constants'

const initialState = {
    favorites: [],
    isInitialLoad: true,
    isRefreshing: false
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FAVORITES:
            return handle(state, action, {
                start: state => ({
                    ...state,
                    isRefreshing: true,
                    fetchError: null
                }),
                finish: state => ({
                    ...state,
                    isInitialLoad: false,
                }),
                failure: state => ({
                    ...state,
                    fetchError: action.payload
                }),
                success: state => ({
                    ...state,
                    favorites: action.payload,
                    isRefreshing: false
                })
            })
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.concat(action.payload)
            }
        case REMOVE_FAVORITE:
            const indexOfRemoved = state.favorites.findIndex(favorite => favorite.locationId === action.payload.locationId && favorite.line === action.payload.line)
            return {
                ...state,
                favorites: [
                    ...state.favorites.slice(0, indexOfRemoved),
                    ...state.favorites.slice(indexOfRemoved + 1)
                ]
            }
        default:
            return { ...state }
    }
}

export default favoritesReducer



