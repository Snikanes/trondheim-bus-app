import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { colors, text } from '../../styles'
import HorizontalDeparturesList from './HorizontalDeparturesList'

const LineDepartures = ({ line, name, direction, departures }) => {

    return (
        <View style={styles.card}>
            <View style={styles.infoSection}>
                <View style={styles.lineContainer}>
                    <Text style={[text.size.large, styles.lineText]}> {line} </Text>
                </View>
                <Text style={[styles.infoText, text.size.large, text.muted]}> {`${name} ${direction}`} </Text>
            </View>
            <HorizontalDeparturesList departures={departures}/>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: 'white',
        borderRadius: 5
    },
    infoSection: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        borderBottomColor: colors.appSecondary,
        borderBottomWidth: 1,
    },
    infoText: {
        textAlign: 'center'
    },
    lineContainer: {
        backgroundColor: colors.appBackground,
        borderRadius: 5,
    },
    lineText: {
        color: 'white'
    }
})

export default LineDepartures
