import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import { colors, text } from '../../../styles'

const StopListElement = ({ stop, stopPressedHandler }) => (
    <View style={styles.bg}>
        <TouchableOpacity
            style={[styles.card]}
            onPress={() => stopPressedHandler(stop)}
            activeOpacity={0.4}
        >
            <View style={styles.leftContent}>
                <Text style={[text.size.large]}> {stop.name} </Text>
                <Text style={[text.size.medium, text.muted]}> {stop.d} </Text>
            </View>
            <View style={styles.rightContent}>
                <Text style={[text.size.medium, text.muted]}> {`${stop.distance} m`} </Text>
            </View>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white',
        borderRadius: 5
    },
    leftContent: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 5
    },
    rightContent: {
        marginRight: 5
    },
    bg: {
        backgroundColor: colors.appSecondary
    }
})

export default StopListElement