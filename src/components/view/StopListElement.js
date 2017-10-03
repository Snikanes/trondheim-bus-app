import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import { colors } from '../../styles'

const StopListElement = ({ stop, stopPressedHandler }) => (
    <View style={styles.bg}>
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => stopPressedHandler(stop)}
                activeOpacity={0.4}
            >
                <View>
                    <Text style={styles.nameText}> {stop.name} </Text>
                    <Text style={styles.directionText}> {stop.d} </Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
)

const styles = StyleSheet.create({

    nameText: {
        fontSize: 20
    },
    directionText: {
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.5)'
    },
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