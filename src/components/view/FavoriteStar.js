import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'

const FavoriteStar = ({ locationId, line, direction, removeFavorite, addFavorite, isFavorite }) => {
    const pressHandler = (locationId, line, direction) => {
        isFavorite ? removeFavorite(locationId, line) : addFavorite(locationId, line, direction)
    }

    return (
        <TouchableOpacity onPress={() => pressHandler(locationId, line, direction)}>
            <Ionicons name="md-star" size={30} color="yellow" />
        </TouchableOpacity>
    )
}

export default FavoriteStar