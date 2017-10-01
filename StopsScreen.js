import React from 'react';
import { View } from 'react-native'

import BusStopView from './BusStopView'

class StopsScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <BusStopView onRequestDepartures={stop => navigate('Departures', { stop: stop} )} />
            </View>
        );
    }
}

export default StopsScreen