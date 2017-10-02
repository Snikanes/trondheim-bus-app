import React from 'react'
import { View, Text } from 'react-native'
import DeparturesList from './DeparturesList'

const DeparturesView = ({ name, departures }) => (
    <View>
        <Text> {name} </Text>
        <DeparturesList departures={departures}/>
    </View>
)

export default DeparturesView