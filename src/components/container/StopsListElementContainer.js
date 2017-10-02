import { connect } from 'react-redux'

import StopListElement from '../view/StopListElement'
import getDepartures from '../../actions/getDepartures'

const mapDispatchToProps = dispatch => {
    return {
        stopPressedHandler: stop => dispatch(getDepartures(stop.locationId))
    }
}

const mapStateToProps = state => {
    return {
        selectedStop: state.stops.stops,
        isLoading: state.stops.isLoading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StopListElement)
