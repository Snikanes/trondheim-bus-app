import { connect } from 'react-redux'

import StopListSearch from '../view/stops/StopListSearch'
import searchTextChanged from '../../actions/searchTextChanged'

const mapDispatchToProps = dispatch => {
    return {
        searchTextChanged: text => dispatch(searchTextChanged(text))
    }
}

export default connect(null, mapDispatchToProps)(StopListSearch)
