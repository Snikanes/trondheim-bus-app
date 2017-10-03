import React from 'react'

import DeparturesView from '../container/DeparturesViewContainer'
import { colors } from '../../styles'

class DeparturesScreen extends React.PureComponent {
    static navigationOptions = {
        title: 'Departures',
        headerTintColor: colors.navHeaderText,
        headerStyle: {
            backgroundColor: colors.appBackground,
        }
    }

    render() {
        return (
            <DeparturesView/>
        )
    }
}


export default DeparturesScreen