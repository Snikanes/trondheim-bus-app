import { connect } from 'react-redux'

import DeparturesView from '../view/departures/DeparturesView'

const mapStateToProps = state => {
    return {
        name: state.departures.name,
        locationId: state.departures.locationId,
        departures: state.departures.next,
        direction: state.departures.direction,
        isLoading: state.departures.isLoading,
        favorites: state.favorites.favorites
    }
}

export default connect(mapStateToProps, null)(DeparturesView)
