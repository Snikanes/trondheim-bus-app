import { connect } from 'react-redux'

import StopView from '../view/StopView'
import getBusStops from '../../actions/getBusStops'

const mapDispatchToProps = dispatch => {
    return {
        getBusStops: () => dispatch(getBusStops())
    }
}

const mapStateToProps = state => {
    return {
        stops: state.stops.stops,
        isLoading: state.stops.isLoading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StopView)
