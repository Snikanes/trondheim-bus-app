import React from 'react'
import { View } from 'react-native'

import StopView from '../container/StopsViewContainer'

class StopsScreen extends React.Component {
    static navigationOptions = {
        title: 'Bus stops'
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <StopView onRequestDepartures={stop => navigate('Departures', { stop: stop })}/>
            </View>
        )
    }
}

export default StopsScreen