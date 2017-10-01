import React from 'react'
import { FlatList } from 'react-native'

import BusStopListElement from './StopListElement'

const BusStopList = ({ stops, onRequestDepartures }) => (
    <FlatList
        data={stops}
        renderItem={({ item }) => <BusStopListElement stop={item} onRequestDepartures={onRequestDepartures}/>}
        keyExtractor={(item, index) => item.nodeId}
    />
)

export default BusStopList