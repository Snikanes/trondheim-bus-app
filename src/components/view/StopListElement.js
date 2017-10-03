import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import { colors, text } from '../../styles'

const StopListElement = ({ stop, stopPressedHandler }) => (
    <View style={styles.bg}>
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => stopPressedHandler(stop)}
                activeOpacity={0.4}
            >
                <View>
                    <Text style={[text.size.large]}> {stop.name} </Text>
                    <Text style={[text.size.medium, text.muted]}> {stop.d} </Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        height: 70,
        marginLeft: '3%',
    },
    bg: {
        backgroundColor: colors.appSecondary
    }
})

export default StopListElement