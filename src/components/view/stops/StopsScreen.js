import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { colors, header } from '../../../styles'
import StopView from '../../container/StopViewContainer'

class StopsScreen extends React.PureComponent {
    static navigationOptions = {
        title: 'Søk etter holdeplasser',
        headerTintColor: colors.navHeaderText,
        headerStyle: { ...header.defaultStyle },
        tabBarIcon: ({ tintColor }) => (
            <Ionicons name="md-search" size={30} color={tintColor} />
        )
    }

    render() {
        return (
            <View>
                <StopView navigation={this.props.navigation}/>
            </View>
        )
    }
}

export default StopsScreen