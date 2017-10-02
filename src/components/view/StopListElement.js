import React from 'react'
import { Text, View, Button } from 'react-native'

const StopElement = ({ stop, stopPressedHandler, navigation }) => (
    <View>
        <Text> {stop.name} </Text>
        <Text> {stop.locationId} </Text>
        <Button title="Show departures" onPress={() => {
            stopPressedHandler(stop)
            navigation.navigate('Departures', { stop: stop })
        }} />
    </View>
)

export default StopElement