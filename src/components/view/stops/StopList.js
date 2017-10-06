import React from 'react'
import { FlatList, View, Text } from 'react-native'

import StopListElement from '../../container/StopsListElementContainer'
import { colors } from '../../../styles'
import ListSeparator from '../common/ListSeparator'

const StopList = ({ stops, navigation }) => {

    return (
        <FlatList
            data={stops}
            renderItem={({ item }) => <StopListElement stop={item} navigation={navigation}/>}
            keyExtractor={(item, index) => item.locationId}
            ItemSeparatorComponent={() => <ListSeparator height={10}/>}
            ListEmptyComponent={<Text> {'Ingen avganger'} </Text>}
        />
    )
}

export default StopList