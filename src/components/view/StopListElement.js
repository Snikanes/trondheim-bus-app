import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import { colors, text } from '../../styles'

const StopListElement = ({ stop, stopPressedHandler }) => (
    <View style={styles.bg}>
        <TouchableOpacity
            style={styles.container}
            onPress={() => stopPressedHandler(stop)}
            activeOpacity={0.4}
        >
            <View style={styles.leftContent}>
                <Text style={[text.size.large]}> {stop.name} </Text>
                <Text style={[text.size.medium, text.muted]}> {stop.d} </Text>
            </View>
            <Text style={[text.size.medium, text.muted]}> {`${stop.distance} m`} </Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        marginLeft: '3%',
        marginRight: '3%',
    },
    leftContent: {
        flex: 1,
        flexDirection: 'column'
    },
    bg: {
        backgroundColor: colors.appSecondary
    }
})

export default StopListElement