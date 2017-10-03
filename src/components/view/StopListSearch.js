import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

import { colors, text } from '../../styles'

const StopListSearch = ({ searchTextChanged }) => {

    return (
        <View>
            <TextInput
                style={styles.textInput}
                placeholder="Søk etter holdeplass"
                onChangeText={text => searchTextChanged(text)}
            />
            <View style={styles.separator} />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        marginLeft: '3%',
        marginRight: '3%',
        height: 50
    },
    separator: {
        height: 1,
        backgroundColor: colors.separator
    }
})

export default StopListSearch