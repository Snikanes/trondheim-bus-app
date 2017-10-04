import React from 'react'
import { FlatList, View, Text } from 'react-native'

import StopListElement from '../container/StopsListElementContainer'
import { colors } from '../../styles'

const StopList = ({ stops, navigation }) => {

    const stopSeparator = () => {
        return (
            <View
                style={{
                    height: 10,
                    backgroundColor: colors.appSecondary,
                }}
            />
        )
    }

    return (
        <FlatList
            data={stops}
            renderItem={({ item }) => <StopListElement stop={item} navigation={navigation} />}
            keyExtractor={(item, index) => item.locationId}
            ItemSeparatorComponent={stopSeparator}
            ListEmptyComponent={<Text> {'Ingen avganger'} </Text>}
        />
    )
}

export default StopList