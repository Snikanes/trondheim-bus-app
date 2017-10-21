import React from 'react'

import FavoritesList from './FavoritesList'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

const FavoritesView = ({ favorites, getFavorites, isRetrievingFavorites }) => (
    <View style={styles.container}>
        <FavoritesList favorites={favorites} refreshHandler={getFavorites}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default FavoritesView