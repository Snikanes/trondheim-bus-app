import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TextInput, StyleSheet, View } from 'react-native'

import { colors } from '../../../styles'

const StopListSearch = ({ searchTextChanged }) => {

    return (
        <View style={styles.searchContainer}>
            <View style={styles.iconContainer}>
                <Ionicons name="md-search" size={30} color={colors.mutedColor} />
            </View>
            <TextInput
                style={styles.textInput}
                placeholder="Søk etter holdeplass"
                onChangeText={text => searchTextChanged(text)}
            />
            <View style={styles.separator}/>
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
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    iconContainer: {
        marginLeft: 10
    }
})

export default StopListSearch