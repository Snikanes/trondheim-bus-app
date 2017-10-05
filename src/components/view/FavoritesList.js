import React from 'react'
import { FlatList, View } from 'react-native'

import LineDepartures from './LineDepartures'
import { colors } from '../../styles'

const FavoritesList = ({ favorites }) => {

    const stopSeparator = () => {
        return (
            <View
                style={{
                    height: 10,
                    backgroundColor: colors.appSecondary
                }}
            />
        )
    }

    const _renderItem = ({ item }) => (
        <LineDepartures
            locationId={item.locationId}
            name={item.name}
            line={item.line}
            departures={item.departures}
            direction={item.direction}
        />
    )

    return (
        <FlatList
            data={favorites}
            renderItem={_renderItem}
            keyExtractor={(item, index) => item.locationId + item.line}
            ItemSeparatorComponent={stopSeparator}
        />
    )
}

export default FavoritesList