import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import { colors, text } from '../../../styles'

const StopListElement = ({ stop, stopPressedHandler }) => (
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
)

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        backgroundColor: 'white',
    },
    leftContent: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10
    },
    rightContent: {
        marginRight: 10
    },
})

export default StopListElement