import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import moment from 'moment'
import 'moment/locale/nb'

const DeparturesListElement = ({ departure }) => (
    <View style={styles.container}>
        <Text style={styles.nameText}> {departure.l} </Text>
        <Text style={styles.timeText}> {createDisplayTime(departure.rt === 1 ? departure.t : departure.ts)} </Text>
    </View>
)

const styles = StyleSheet.create({
    nameText: {
        fontSize: 20
    },
    timeText: {
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

const createDisplayTime = timeString => {
    moment.locale('nb')

    const departureTime = moment(timeString, 'DD.MM.YYYY HH:mm')
    return departureTime.isBefore(moment().add(15, 'm')) ? departureTime.fromNow() : departureTime.format('HH:mm')
}

export default DeparturesListElement