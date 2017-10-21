import React from 'react'

import FavoritesList from './FavoritesList'
import { View, StyleSheet } from 'react-native'

const FavoritesView = ({ favorites, getFavorites, isRetrievingFavorites, isRefreshing, isInitialLoad }) => (
    <View style={styles.container}>
        <FavoritesList favorites={favorites} refreshHandler={getFavorites} isRefreshing={isRefreshing} isInitialLoad={isInitialLoad}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default FavoritesView