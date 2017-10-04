import { connect } from 'react-redux'

import DeparturesListElement from '../view/DeparturesListElement'
import addFavorite from '../../actions/addFavorite'

const mapDispatchToProps = dispatch => {
    return {
        addFavorite: (locationId, line) => dispatch(addFavorite(locationId, line))
    }
}

const mapStateToProps = state => {
    return {
        locationId: state.departures.locationId
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeparturesListElement)
