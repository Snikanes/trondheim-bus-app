import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


import { colors, header } from '../../../styles'
import FavoritesView from '../../container/FavoritesViewContainer'

class FavoritesScreen extends React.PureComponent {

    static navigationOptions = {
        title: 'Mine avganger',
        headerTintColor: colors.navHeaderText,
        headerStyle: { ...header.defaultStyle },
        tabBarIcon: ({ tintColor }) => (
            <Ionicons name="md-star" size={30} color={tintColor} />
        )
    }

    render() {
        return <FavoritesView/>
    }
}

export default FavoritesScreen