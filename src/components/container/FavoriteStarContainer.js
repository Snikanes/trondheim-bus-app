import { connect } from 'react-redux'

import addFavorite from '../../actions/addFavorite'
import removeFavorite from '../../actions/removeFavorite'
import FavoriteStar from '../view/FavoriteStar'

const mapDispatchToProps = dispatch => {
    return {
        removeFavorite: (locationId, line) => dispatch(removeFavorite(locationId, line)),
        addFavorite: (locationId, line, direction) => dispatch(addFavorite(locationId, line, direction)),
    }
}

export default connect(null, mapDispatchToProps)(FavoriteStar)
