import React from 'react'
import { View } from 'react-native'

import { colors, header } from '../../styles'
import FavoritesView from '../container/FavoritesViewContainer'

class FavoritesScreen extends React.PureComponent {

    static navigationOptions = {
        title: 'Mine avganger',
        headerTintColor: colors.navHeaderText,
        headerStyle: { ...header.defaultStyle }
    }

    render () {
        return (
            <View>
                <FavoritesView />
            </View>
        )
    }
}

export default FavoritesScreen