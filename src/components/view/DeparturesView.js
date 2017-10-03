import React from 'react'
import { View } from 'react-native'

import DeparturesList from './DeparturesList'
import StopInfo from './StopInfo'

const DeparturesView = ({ name, locationId, direction, departures }) => (
    <View>
        <StopInfo name={name} locationId={locationId} direction={direction}/>
        <DeparturesList departures={departures}/>
    </View>
)

export default DeparturesView