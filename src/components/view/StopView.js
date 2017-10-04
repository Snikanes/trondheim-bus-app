import React from 'react'
import { View, Text } from 'react-native'

import StopList from './StopList'
import StopListSearch from '../container/StopListSearchContainer'
import FavoritesView from '../container/FavoritesViewContainer'

class StopView extends React.Component {

    async componentDidMount() {
        this.props.getNearbyStops(navigator.geolocation)
        this.props.getFavorites()
    }

    render() {
        return (
            <View>
                <StopListSearch />
                <FavoritesView />
                <StopList stops={this.props.stops} navigation={this.props.navigation}/>
            </View>
        )
    }
}

export default StopView