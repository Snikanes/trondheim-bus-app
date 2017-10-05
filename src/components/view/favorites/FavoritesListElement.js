import React from 'react'
import { View, Text } from 'react-native'

const FavoritesListElement = ({ favorite }) => (
    <View>
        <Text> {favorite.name} </Text>
        <Text> {favorite.line} </Text>
    </View>
)

export default FavoritesListElement