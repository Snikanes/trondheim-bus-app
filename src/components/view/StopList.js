import React from 'react'
import { FlatList } from 'react-native'

import StopListElement from '../container/StopsListElementContainer'

const StopList = ({ stops, navigation }) => (

    <FlatList
        data={stops}
        renderItem={({ item }) => <StopListElement stop={item} navigation={navigation}/>}
        keyExtractor={(item, index) => item.locationId}
    />
)

export default StopList