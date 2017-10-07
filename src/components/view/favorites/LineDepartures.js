import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { colors, text } from '../../../styles'
import HorizontalDeparturesList from '../common/HorizontalDeparturesList'
import FavoriteStar from '../common/FavoriteStar'

const LineDepartures = ({ locationId, line, name, direction, departures, removeFavorite }) => {

    return (
        <View style={styles.bg}>
            <View style={styles.card}>
                <View style={styles.infoSection}>
                    <View style={styles.lineContainer}>
                        <Text style={[text.size.large, styles.lineText]}> {line} </Text>
                    </View>
                    <View style={styles.stopNameContainer}>
                        <Text style={[text.size.medium]}> {`${name} ${direction}`} </Text>
                    </View>
                    <View style={[styles.favoriteStarContainer]}>
                        <FavoriteStar isFavorite pressHandler={() => removeFavorite(locationId, line)} />
                    </View>
                </View>
                <HorizontalDeparturesList style={styles.departures} departures={departures}/>
            </View>
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
    },
    bg: {
        backgroundColor: colors.appSecondary,
        maxHeight: 80
    },

    departures: {
        flex: 3
    }
})

export default LineDepartures
