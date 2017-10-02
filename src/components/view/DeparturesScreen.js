import React from 'react'

import DeparturesView from '../container/DeparturesViewContainer'

class DeparturesScreen extends React.PureComponent {
    static navigationOptions = {
        title: 'Departures'
    }

    render() {
        return (
            <DeparturesView/>
        )
    }
}


export default DeparturesScreen