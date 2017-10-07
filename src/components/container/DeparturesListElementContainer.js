import { connect } from 'react-redux'

import DeparturesListElement from '../view/departures/DeparturesListElement'
import addFavorite from '../../actions/addFavorite'
import removeFavorite from '../../actions/removeFavorite'

const mapDispatchToProps = dispatch => {
    return {
        addFavorite: (locationId, line, direction) => dispatch(addFavorite(locationId, line, direction)),
        removeFavorite: (locationId, line) => dispatch(removeFavorite(locationId, line)),
    }
}

const mapStateToProps = state => {
    return {
        locationId: state.departures.locationId,
        direction: state.departures.direction,
        isLineFavorite: (locationId, line) => state.favorites.favorites.some(departure => locationId === departure.locationId && line === departure.line)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeparturesListElement)
