import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import DeparturesList from './DeparturesList'
import StopInfo from './StopInfo'

const DeparturesView = ({ name, locationId, direction, departures, isLoading }) => (
    <View style={styles.container}>
        <StopInfo name={name} locationId={locationId} direction={direction}/>
        {isLoading ? <ActivityIndicator style={{flexGrow: 5}} size={'large'}/> : <DeparturesList departures={departures}/>}
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'flex-start',
        justifyContent: 'center'
    }
})

export default DeparturesView