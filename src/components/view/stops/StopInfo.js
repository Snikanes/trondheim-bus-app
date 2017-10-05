import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { colors, text } from '../../../styles'

const StopInfo = ({ name, direction }) => {

    return (
        <View>
            <View style={styles.container}>
                <Text style={text.size.large}> {name} </Text>
                <Text style={[text.size.large, text.muted]}> {direction} </Text>
            </View>
            <View style={styles.separator}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    separator: {
        height: 1,
        backgroundColor: colors.separator
    }
})

export default StopInfo