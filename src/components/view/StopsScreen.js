import React from 'react'
import { View } from 'react-native'

import StopView from '../container/StopsViewContainer'

class StopsScreen extends React.Component {
    static navigationOptions = {
        title: 'Bus stops'
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