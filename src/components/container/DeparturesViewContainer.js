import { connect } from 'react-redux'

import DeparturesView from '../view/departures/DeparturesView'
import getDepartures from '../../actions/getDepartures'

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

const mapDispatchToProps = dispatch => {
    return {
        getDepartures: locationId => dispatch(getDepartures(locationId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeparturesView)
