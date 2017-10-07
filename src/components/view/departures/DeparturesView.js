import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import DeparturesList from './DeparturesList'
import StopInfo from '../stops/StopInfo'

const DeparturesView = ({ name, locationId, direction, departures, isLoading, favorites  }) => (
    <View style={styles.container}>
        <StopInfo name={name} locationId={locationId} direction={direction}/>
        {isLoading ?
            <ActivityIndicator style={{ flexGrow: 5 }} size={'large'}/>
            :
            <DeparturesList locationId={locationId} direction={direction} departures={departures} favorites={favorites}/>
        }
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