import { connect } from 'react-redux'

import LineDepartures from '../view/favorites/LineDepartures'
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
        isLineFavorite: (locationId, line) => state.favorites.favorites.some(departure => locationId === departure.locationId && line === departure.line)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineDepartures)
