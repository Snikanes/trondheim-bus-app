import React from 'react'
import { View, Text } from 'react-native'

import StopList from './StopList'
import StopListSearch from '../container/StopListSearchContainer'

class StopView extends React.Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        this.props.getNearbyStops(navigator.geolocation)
    }

    render() {
        return (
            <View>
                <StopListSearch />
                <StopList stops={this.props.stops} navigation={this.props.navigation}/>
            </View>
        )
    }
}

export default StopView