import React from 'react'

import BusStopList from './BusStopList'

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
            <BusStopList stops={this.state.stops} />
        )
    }
}

export default BusStopView