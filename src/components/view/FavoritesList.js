import React from 'react'
import { FlatList } from 'react-native'

import FavoritesListElement from './FavoritesListElement'

const FavoritesList = ({ favorites }) => (
    <FlatList
        data={favorites}
        renderItem={({ item }) => <FavoritesListElement favorite={item} />}
        keyExtractor={(item, index) => item.locationId + item.line}
    />
)

export default FavoritesList