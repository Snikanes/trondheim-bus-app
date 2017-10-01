import React from 'react'
import { Text, View, Button } from 'react-native'

const BusStopElement = ({ stop, onRequestDepartures }) => (
    <View>
        <Text> {stop.description} </Text>
        <Text> {stop.nodeId} </Text>
        <Button title="Show departures" onPress={() => onRequestDepartures(stop)}> </Button>
    </View>
)

export default BusStopElement