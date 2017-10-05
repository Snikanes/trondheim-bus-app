import React from 'react'
import { View } from 'react-native'

import { colors, header } from '../../styles'
import StopView from '../container/StopViewContainer'

class StopsScreen extends React.PureComponent {
    static navigationOptions = {
        title: 'Holdeplasser',
        headerTintColor: colors.navHeaderText,
        headerStyle: { ...header.defaultStyle }
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