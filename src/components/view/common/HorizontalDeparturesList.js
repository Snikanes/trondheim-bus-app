import React from 'react'
import { FlatList, Text } from 'react-native'
import moment from 'moment'
import 'moment/locale/nb'
import { text } from '../../../styles'

const HorizontalDeparturesList = ({ departures }) => (
    <FlatList
        contentContainerStyle={{ justifyContent: 'space-around', alignItems: 'center' }}
        horizontal
        snapToInterval={200}
        snapToAlignment={"center"}
        data={departures}
        keyExtractor={(item, index) => item.rt === 1 ? item.t : item.ts}
        renderItem={({ item }) => <Text style={text.size.large}> {createDisplayTime(item.rt === 1 ? item.t : item.ts)} </Text>}
    />
)

const createDisplayTime = timeString => {
    moment.locale('nb')
    moment.updateLocale('nb', {
        relativeTime: {
            future: 'om %s',
            past: 'nå',
            s: 'nå',
            m: '1 min',
            mm: '%d min',
            h: 'en time',
            hh: '%d timer',
            d: 'en dag',
            dd: '%d dager',
            M: 'en måned',
            MM: '%d måneder',
            y: 'ett år',
            yy: '%d år'
        }
    })

    const departureTime = moment(timeString, 'DD.MM.YYYY HH:mm')
    return departureTime.isBefore(moment().add(15, 'm')) ? departureTime.fromNow(true) : departureTime.format('HH:mm')
}

export default HorizontalDeparturesList


