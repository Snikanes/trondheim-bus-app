import React from 'react'

import FavoritesList from './FavoritesList'
import { ActivityIndicator, View } from 'react-native'

const FavoritesView = ({ favorites, getFavorites, isRetrievingFavorites }) => (
    <View>
        <FavoritesList favorites={favorites} refreshHandler={getFavorites}/>
    </View>
)



export default FavoritesView