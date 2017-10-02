import { connect } from 'react-redux'

import DeparturesView from '../view/DeparturesView'

const mapStateToProps = state => {
    return {
        name: state.departures.name,
        departures: state.departures.next
    }
}

export default connect(mapStateToProps, null)(DeparturesView)
