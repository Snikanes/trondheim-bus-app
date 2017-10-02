import React from 'react'
import { View, Text } from 'react-native'

class DeparturesScreen extends React.PureComponent {
    static navigationOptions = {
        title: 'Departures'
    }

    render() {
        const { departures } = this.props
        return (
            <View>
                {departures.map(dep => {
                    return (
                        <View>
                            <Text> {dep.l} </Text>
                            <Text> {dep.t} </Text>
                        </View>
                    )
                })}
            </View>
        )

    }
}


export default DeparturesScreen