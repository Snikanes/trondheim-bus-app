import React from 'react'
import { FlatList, Text } from 'react-native'

import BusStopListElement from './BusStopListElement'

const BusStopList = ({ stops }) => (
    <FlatList
        data={ stops }
        renderItem={({ item }) => <BusStopListElement stop={item} /> }
    />
)

export default BusStopList