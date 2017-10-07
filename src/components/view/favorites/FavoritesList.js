import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'

import { colors, text } from '../../../styles'
import DeparturesListElement from '../../container/DeparturesListElementContainer'

const FavoritesList = ({ favorites }) => {

    const stopSeparator = () => {
        return (
            <View
                style={{
                    height: 10
                }}
            />
        )
    }

    const _renderItem = ({ item }) => {
        console.log(item)

        return <DeparturesListElement
            isFavorite
            locationId={item.locationId}
            direction={item.direction}
            name={item.name}
            departures={item.departures}
            line={item.line}
        />
    }

    return (
        <FlatList
            contentContainerStyle={favorites.length > 0 ? styles.containerStyle : styles.listEmptyStyle}
            data={favorites}
            renderItem={_renderItem}
            keyExtractor={(item, index) => item.locationId + item.line}
            ItemSeparatorComponent={stopSeparator}
            ListEmptyComponent={<Text style={[text.size.medium, styles.listEmptyText]}> {"Du har ingen favoritter. Søk etter en holdeplass og trykk på stjernen i avgangen du ønsker å legge til her."} </Text>}
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

export default FavoritesList