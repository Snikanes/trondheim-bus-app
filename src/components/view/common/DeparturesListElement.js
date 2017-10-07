import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { colors, text } from '../../../styles'
import HorizontalDeparturesList from './HorizontalDeparturesList'
import FavoriteStar from './FavoriteStar'

const DeparturesListElement = ({ addFavorite, removeFavorite, departures, locationId, direction, isFavorite, line, name }) => {

    const pressHandler = isFavorite ? () => removeFavorite(locationId, line) : () => addFavorite(locationId, line, direction)

    return (
        <View style={styles.card}>
            <View style={styles.infoSection}>
                <View style={styles.lineContainer}>
                    <Text style={[text.size.large, styles.lineText]}> {line} </Text>
                </View>
                <View style={styles.stopNameContainer}>
                    <Text> {name ? `${name} ${direction}` : ''}</Text>
                </View>
                <View style={[styles.favoriteStarContainer]}>
                    <FavoriteStar isFavorite={isFavorite} pressHandler={pressHandler}/>
                </View>
            </View>
            <HorizontalDeparturesList departures={departures}/>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 80,
        height: 80,
        width: '100%',
        backgroundColor: 'white'
    },
    infoSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
    }
})

export default DeparturesListElement