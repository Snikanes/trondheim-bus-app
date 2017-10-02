import React from 'react'
import { TextInput } from 'react-native'

const StopListSearch = ({ searchTextChanged }) => {

    return (
        <TextInput
            style={{height: 40}}
            placeholder="Søk etter holdeplass"
            onChangeText={text => searchTextChanged(text)}
        />
    )
}

export default StopListSearch