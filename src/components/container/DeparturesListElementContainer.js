import { connect } from 'react-redux'

import DeparturesListElement from '../view/DeparturesListElement'
import addFavorite from '../../actions/addFavorite'

const mapDispatchToProps = dispatch => {
    return {
        addFavorite: (locationId, line, direction) => dispatch(addFavorite(locationId, line, direction))
    }
}

const mapStateToProps = state => {
    return {
        locationId: state.departures.locationId,
        direction: state.departures.direction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeparturesListElement)
