import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import DeparturesListElement from '../../container/DeparturesListElementContainer'
import ListSeparator from '../common/ListSeparator'
import { colors } from '../../../styles'

const DeparturesList = ({ locationId, direction, departures, favorites }) => {

    const departuresMap = new Map()

    departures.forEach(departure => {
        if (!departuresMap.has(departure.l)) {
            departuresMap.set(departure.l, [])
        }
        departuresMap.get(departure.l).push(departure)
    })

    const departuresListData = Array.from(departuresMap.values())

    const _renderItem = ({ item }) => {
        const line = item[0].l
        const isFavorite = favorites.some(favorite => favorite.locationId === locationId && favorite.line === line)

        return <DeparturesListElement
            isFavorite={isFavorite}
            locationId={locationId}
            direction={direction}
            line={item[0].l}
            departures={item}
        />
    }

    return (
        <FlatList
            contentContainerStyle={departuresListData.length > 0 ? styles.containerStyle : styles.listEmptyStyle}
            data={departuresListData}
            renderItem={_renderItem}
            keyExtractor={(item, index) => item[0].l}
            ItemSeparatorComponent={() => <ListSeparator height={10}/>}
        />
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%'
    },
    listEmptyStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    listEmptyText: {
        textAlign: 'center',
        color: colors.mutedColor
    }
})

export default DeparturesList