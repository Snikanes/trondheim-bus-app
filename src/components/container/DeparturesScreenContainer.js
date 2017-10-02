import { connect } from 'react-redux'

import DeparturesScreen from '../view/DeparturesScreen'

const mapStateToProps = state => {
    return {
        departures: state.departures.next,
        isLoading: state.stops.isLoading
    }
}

export default connect(mapStateToProps, null)(DeparturesScreen)
