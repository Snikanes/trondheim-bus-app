import React from 'react'
import { connect, Provider } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

import StopsScreen from './src/components/view/StopsScreen'
import DeparturesScreen from './src/components/container/DeparturesScreenContainer'
import configureStore from "./src/store/store";

const routes = {
    BusStops: { screen: StopsScreen },
    Departures: { screen: DeparturesScreen }
}

const AppNavigator = StackNavigator(routes)

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