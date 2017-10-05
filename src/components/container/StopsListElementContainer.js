import { connect } from 'react-redux'

import StopListElement from '../view/stops/StopListElement'
import getDepartures from '../../actions/getDepartures'
import setSelectedStop from '../../actions/setSelectedStop'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        stopPressedHandler: stop => {
            dispatch(setSelectedStop(stop))
            dispatch(getDepartures(stop.locationId))
            ownProps.navigation.navigate('Departures')
        }
    }
}

const mapStateToProps = state => {
    return {
        selectedStop: state.stops.stops,
        isLoading: state.stops.isLoading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StopListElement)
