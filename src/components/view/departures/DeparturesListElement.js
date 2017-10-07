import React from 'react'
import { Text, View, StyleSheet, } from 'react-native'

import { colors, text } from '../../../styles'
import HorizontalDeparturesList from '../common/HorizontalDeparturesList'
import FavoriteStar from '../common/FavoriteStar'

const DeparturesListElement = ({ addFavorite, removeFavorite, departures, locationId, direction, isLineFavorite }) => {

    const line = departures[0].l

    const isFavorite = isLineFavorite(locationId, line)

    const pressHandler = isFavorite ? () => removeFavorite(locationId, line) : () => addFavorite(locationId, line, direction)

    return (
        <View style={styles.card}>
            <View style={styles.infoSection}>
                <View style={styles.lineContainer}>
                    <Text style={[text.size.large, styles.lineText]}> {line} </Text>
                </View>
                <View style={styles.stopNameContainer}>
                    <Text> {""} </Text>
                </View>
                <View style={[styles.favoriteStarContainer]}>
                    <FavoriteStar isFavorite={isFavorite} pressHandler={pressHandler} />
                </View>
            </View>
            <HorizontalDeparturesList style={styles.departures} departures={departures}/>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        backgroundColor: 'white'
    },
    infoSection: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: colors.appSecondary,
        borderBottomWidth: 1
    },
    lineContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.appBackground
    },
    stopNameContainer: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    favoriteStarContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.appBackground
    },
    lineText: {
        color: colors.navHeaderText,
        textAlign: 'center'
    },
    bg: {
        maxHeight: 80
    },
    departures: {
        flex: 3
    }
})

export default DeparturesListElement