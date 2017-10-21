import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

import DeparturesList from './DeparturesList'
import StopInfo from '../stops/StopInfo'

const DeparturesView = ({ name, locationId, direction, departures, isLoading, favorites, getDepartures }) => (
    <View style={styles.container}>
        <View style={styles.infoContainer}>
            <StopInfo name={name} locationId={locationId} direction={direction}/>
        </View>
        <View style={styles.departuresContainer}>
                  <DeparturesList locationId={locationId} direction={direction} departures={departures}
                                  favorites={favorites} refreshHandler={getDepartures} isLoading={isLoading}/>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    infoContainer: {
        flex: 1,
    },
    departuresContainer: {
        flex: 5
    }

})

export default DeparturesView