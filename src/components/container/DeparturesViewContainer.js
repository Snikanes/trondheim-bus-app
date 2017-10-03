import { connect } from 'react-redux'

import DeparturesView from '../view/DeparturesView'

const mapStateToProps = state => {
    return {
        name: state.departures.name,
        locationId: state.departures.locationId,
        departures: state.departures.next,
        direction: state.departures.direction,
    }
}

export default connect(mapStateToProps, null)(DeparturesView)
