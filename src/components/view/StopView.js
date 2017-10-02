import React from 'react'

import StopList from './StopList'

class StopView extends React.Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        this.props.getBusStops()
    }

    render() {
        return (
            <StopList stops={this.props.stops} navigation={this.props.navigation}/>
        )
    }
}

export default StopView