import { connect } from 'react-redux'

import StopView from '../view/stops/StopView'
import getNearbyStops from '../../actions/getNearbyStops'
import getFavorites from '../../actions/getFavorites'

const mapDispatchToProps = dispatch => {

    return {
        getNearbyStops: locationApi => dispatch(getNearbyStops(locationApi)),
        getFavorites: () => dispatch(getFavorites())
    }
}

const mapStateToProps = state => {
    return {
        stops: state.stops.filteredStops,
        favorites: state.favorites.favorites,
        isLoading: state.stops.isLoading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StopView)
