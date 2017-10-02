import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'

const StopListElement = ({ stop, stopPressedHandler, navigation }) => (
    <View style={styles.container}>
        <TouchableHighlight onPress={() => {
            stopPressedHandler(stop)
            navigation.navigate('Departures', { stop: stop })
        }}>
            <View>
                <Text style={styles.nameText}> {stop.name} </Text>
                <Text style={styles.directionText}> {stop.d} </Text>
            </View>
        </TouchableHighlight>
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
        marginLeft: '3%'
    }
})

export default StopListElement