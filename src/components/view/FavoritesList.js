import React from 'react'
import { FlatList, Text } from 'react-native'

import FavoritesListElement from './FavoritesListElement'

const FavoritesList = ({ favorites }) => {
    const listHeader = <Text> {"Mine avganger"} </Text>

    return (
        <FlatList
            data={favorites}
            renderItem={({ item }) => <FavoritesListElement favorite={item} />}
            keyExtractor={(item, index) => item.locationId + item.line}
            ListHeaderComponent={listHeader}
        />
    )
}

export default FavoritesList