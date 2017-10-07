import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'
import { colors } from '../../../styles'

const FavoriteStar = ({ pressHandler, isFavorite }) => {

    return (
        <TouchableOpacity onPress={pressHandler}>
            <Ionicons name="md-star" size={30} color={isFavorite ? colors.favStarColor : colors.favStarColorNonFavorite} />
        </TouchableOpacity>
    )
}

export default FavoriteStar