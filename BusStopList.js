import React from 'react'
import { FlatList } from 'react-native'

import BusStopListElement from './BusStopListElement'

const BusStopList = ({ stops, onRequestDepartures }) => (
    <FlatList
        data={ stops }
        renderItem={({ item }) => <BusStopListElement stop={ item } onRequestDepartures={ onRequestDepartures }/> }
    />
)

export default BusStopList