import React from 'react'

import BusStopList from './StopList'

class StopView extends React.Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        this.props.getBusStops()
    }

    render() {
        return (
            <BusStopList stops={this.props.stops} onRequestDepartures={this.props.onRequestDepartures}/>
        )
    }
}

export default StopView