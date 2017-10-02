import React from 'react'
import { View, Text } from 'react-native'

const DeparturesScreen = ({ departures }) => (

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


export default DeparturesScreen