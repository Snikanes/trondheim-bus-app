import React from 'react'

import DeparturesView from '../container/DeparturesViewContainer'
import { colors, header } from '../../styles'

class DeparturesScreen extends React.PureComponent {
    static navigationOptions = {
        title: 'Avganger',
        headerTintColor: colors.navHeaderText,
        headerStyle: { ...header.defaultStyle }
    }

    render() {
        return (
            <DeparturesView/>
        )
    }
}


export default DeparturesScreen