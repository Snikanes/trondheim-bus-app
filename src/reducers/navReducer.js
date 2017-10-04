import { NavigationActions } from 'react-navigation'

const createNavReducer = appNavigator => {
    const initialState = appNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Favorites'}))

    return (state = initialState, action) => {
        const nextState = appNavigator.router.getStateForAction(action, state)

        switch (action.type) {
            default:
                return nextState || state
        }

    }
}

export default createNavReducer