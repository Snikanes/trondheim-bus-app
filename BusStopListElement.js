import React from 'react'

import { Text, View } from 'react-native'

const BusStopElement = ({ stop }) => (
    <View>
        <Text> { stop.description } </Text>
        <Text> { stop.nodeId } </Text>
    </View>
)

export default BusStopElement