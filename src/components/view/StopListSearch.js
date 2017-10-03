import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

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
    nameText: {
        fontSize: 20
    },
    timeText: {
        fontSize: 20,
        color: 'rgba(0, 0, 0, 0.5)'
    },
    textInput: {
        marginLeft: '3%',
        marginRight: '3%',
        height: 50
    },
    separator: {
        height: 1,
        backgroundColor: "#CED0CE"
    }
})

export default StopListSearch