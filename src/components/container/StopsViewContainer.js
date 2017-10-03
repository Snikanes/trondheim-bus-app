import { connect } from 'react-redux'

import StopView from '../view/StopView'
import getNearbyStops from '../../actions/getNearbyStops'

const mapDispatchToProps = dispatch => {

    return {
        getNearbyStops: locationApi => dispatch(getNearbyStops(locationApi))
    }
}

const mapStateToProps = state => {
    return {
        stops: state.stops.filteredStops,
        isLoading: state.stops.isLoading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StopView)
