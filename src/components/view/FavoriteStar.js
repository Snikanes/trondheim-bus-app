import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const FavoriteStar = ({ locationId, line, addFavorite, removeFavorite, isFavorite }) => {

    return (
        <Ionicons name="md-star" size={30} color="yellow" />
    )
}

export default FavoriteStar