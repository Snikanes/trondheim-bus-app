import { connect } from 'react-redux'

import DeparturesListElement from '../view/common/DeparturesListElement'
import addFavorite from '../../actions/addFavorite'
import removeFavorite from '../../actions/removeFavorite'

const mapDispatchToProps = dispatch => {
    return {
        addFavorite: (locationId, line, direction) => dispatch(addFavorite(locationId, line, direction)),
        removeFavorite: (locationId, line) => dispatch(removeFavorite(locationId, line)),
    }
}

export default connect(null, mapDispatchToProps)(DeparturesListElement)