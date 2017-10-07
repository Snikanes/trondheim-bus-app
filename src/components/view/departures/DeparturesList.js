import React from 'react'
import { FlatList } from 'react-native'

import DeparturesListElement from '../../container/DeparturesListElementContainer'
import ListSeparator from '../common/ListSeparator'

const DeparturesList = ({ departures }) => {

    const departuresMap = new Map()

    departures.forEach(departure => {
        if (!departuresMap.has(departure.l)) {
            departuresMap.set(departure.l, [])
        }
        departuresMap.get(departure.l).push(departure)
    })

    const departuresListData = Array.from(departuresMap.values())

    return (
        <FlatList
            data={departuresListData}
            renderItem={({ item }) => <DeparturesListElement departures={item}/>}
            keyExtractor={(item, index) => item[0].l}
            ItemSeparatorComponent={() => <ListSeparator height={10}/>}
        />
    )
}

export default DeparturesList