import React from 'react'
import { FlatList, View } from 'react-native'

import StopListElement from '../container/StopsListElementContainer'

const StopList = ({ stops, navigation }) => {

    const stopSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    backgroundColor: "#CED0CE",
                }}
            />
        )
    }



    return (
        <FlatList
            data={stops}
            renderItem={({ item }) => <StopListElement stop={item} navigation={navigation}/>}
            keyExtractor={(item, index) => item.locationId}
            ItemSeparatorComponent={stopSeparator}
        />
    )
}

export default StopList