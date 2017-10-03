import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import moment from 'moment'
import 'moment/locale/nb'

import { colors, text } from '../../styles'

const DeparturesListElement = ({ departure }) => (
    <View style={{backgroundColor: colors.appSecondary}}>
        <View style={styles.container}>
            <Text style={[text.size.large]}> {departure.l} </Text>
            <Text style={[text.size.large, text.muted]}> {createDisplayTime(departure.rt === 1 ? departure.t : departure.ts)} </Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        marginLeft: '3%',
        marginRight: '3%'
    },
})

const createDisplayTime = timeString => {
    moment.locale('nb')
    const departureTime = moment(timeString, 'DD.MM.YYYY HH:mm')
    if(departureTime.isBefore(moment().add(1, 'm') || departureTime.isAfter(moment.now()))) {
        return 'nå'
    }
    return departureTime.isBefore(moment().add(15, 'm')) ? departureTime.fromNow() : departureTime.format('HH:mm')
}

export default DeparturesListElement