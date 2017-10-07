import { connect } from 'react-redux'

import FavoritesView from '../view/favorites/FavoritesView'
import getFavorites from '../../actions/getFavorites'

const mapStateToProps = state => {
    return {
        favorites: state.favorites.favorites
    }
}

export default connect(mapStateToProps, null)(FavoritesView)
