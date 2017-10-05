import React from 'react'
import { connect, Provider } from 'react-redux'
import { addNavigationHelpers, TabNavigator, StackNavigator, NavigationActions } from 'react-navigation'

import StopsScreen from './src/components/view/stops/StopsScreen'
import FavoritesScreen from './src/components/view/favorites/FavoritesScreen'
import DeparturesScreen from './src/components/view/departures/DeparturesScreen'

import configureStore from "./src/store/store";

const tabRoutes = {
    Favorites: {
        screen: FavoritesScreen
    },
    Stops: {
        screen: StopsScreen
    }
}

const TabsNav = TabNavigator(tabRoutes, { animationEnabled: true, swipeEnabled: true })

const rootRoutes = {
    Home: {
        screen: TabsNav
    },
    Departures: {
        screen: DeparturesScreen
    }
}

const AppNavigator = StackNavigator(rootRoutes)

// Required to make the stack navigator navigate only once in response to multiple taps
const navigateOnce = (getStateForAction) => (action, state) => {
    const {type, routeName} = action;
    return (
        state &&
        type === NavigationActions.NAVIGATE &&
        routeName === state.routes[state.routes.length - 1].routeName
    ) ? state : getStateForAction(action, state);
}

AppNavigator.router.getStateForAction = navigateOnce(AppNavigator.router.getStateForAction);


class App extends React.Component {
    render() {
        return (
            <AppNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav,
            })} />
        );
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);


const store = configureStore(AppNavigator)

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

export default Root