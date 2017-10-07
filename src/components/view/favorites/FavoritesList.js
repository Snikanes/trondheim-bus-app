import React from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'

import { colors, text } from '../../../styles'
import DeparturesListElement from '../../container/DeparturesListElementContainer'
import ListSeparator from '../common/ListSeparator'

const FavoritesList = ({ favorites }) => {

    const _renderItem = ({ item }) => {
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
            contentContainerStyle={favorites.length === 0 && styles.listEmptyStyle}
            data={favorites}
            renderItem={_renderItem}
            keyExtractor={(item, index) => item.id}
            ItemSeparatorComponent={() => <ListSeparator height={10}/>}
            ListEmptyComponent={<Text style={[text.size.medium, styles.listEmptyText]}> {"Du har ingen favoritter. Søk etter en holdeplass og trykk på stjernen i avgangen du ønsker å legge til her."} </Text>}
        />
    )
}

const styles = StyleSheet.create({
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