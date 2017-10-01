import { STOPS_SCREEN } from '../constants'

const createNavReducer = appNavigator => {
    const initialState = appNavigator.router.getStateForAction(appNavigator.router.getActionForPathAndParams('BusStops'))

    return (state = initialState, action) => {
        const nextState = appNavigator.router.getStateForAction(action, state)

        switch (action.type) {
            case STOPS_SCREEN:
                console.log('In stops screen')
                return nextState
            default:
                return nextState || state
        }

    }
}

export default createNavReducer