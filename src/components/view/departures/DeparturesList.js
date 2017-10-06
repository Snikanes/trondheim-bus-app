import React from 'react'
import { FlatList, View, Text } from 'react-native'

import DeparturesListElement from '../../container/DeparturesListElementContainer'
import ListSeparator from '../common/ListSeparator'

const DeparturesList = ({ departures }) => {

    return (
        <FlatList
            data={departures}
            renderItem={({ item }) => <DeparturesListElement departure={item}/>}
            keyExtractor={(item, index) => item.l.concat(item.ts)}
            ItemSeparatorComponent={() => <ListSeparator height={1}/>}
        />
    )
}

export default DeparturesList