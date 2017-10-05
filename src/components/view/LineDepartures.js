import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { colors, text } from '../../styles'
import HorizontalDeparturesList from './HorizontalDeparturesList'
import FavoriteStar from '../container/FavoriteStarContainer'

const LineDepartures = ({ locationId, line, name, direction, departures }) => {

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
                        <FavoriteStar isFavorite locationId={locationId} line={line} direction={direction} />
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
        alignItems: 'flex-start'
    },
    favoriteStarContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.appBackground
    },
    lineText: {
        color: 'white',
        textAlign: 'center'
    },
    bg: {
        backgroundColor: colors.appSecondary
    },

    departures: {
        flex: 3
    }
})

export default LineDepartures
