import React from 'react'
import { View, FlatList, Text } from 'react-native'

class BusStopView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            stops: null,
            isLoading: false
        }
    }

    async componentDidMount() {
        let result = (await this.getBusStops()).map(stop => {
            return {
                ...stop,
                key: stop.nodeId
            }
        })

        this.setState({
            isLoading: false,
            stops: result
        })
    }

    getBusStops() {
        return fetch('https://atbapi.tar.io/api/v1/busstops')
            .then(result => result.json())
            .then(json => json.stops)
            .catch(err => console.error(err))
    }

    render() {
        return (
            <FlatList
                data={this.state.stops}
                renderItem={({item}) => <Text>{item.description}</Text>}
            />
        )
    }
}

export default BusStopView