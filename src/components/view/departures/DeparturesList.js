import React from 'react'
import { FlatList, View, Text } from 'react-native'

import DeparturesListElement from '../../container/DeparturesListElementContainer'

const DeparturesList = ({ departures }) => {

    const departureSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    backgroundColor: '#CED0CE'
                }}
            />
        )
    }

    return (
        <FlatList
            data={departures}
            renderItem={({ item }) => <DeparturesListElement departure={item}/>}
            keyExtractor={(item, index) => item.l.concat(item.ts)}
            ItemSeparatorComponent={departureSeparator}
        />
    )
}

export default DeparturesList