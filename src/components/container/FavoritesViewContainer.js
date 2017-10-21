import { connect } from 'react-redux'

import FavoritesView from '../view/favorites/FavoritesView'
import getFavorites from '../../actions/getFavorites'

const mapStateToProps = state => {
    return {
        favorites: state.favorites.favorites,
        isRefreshing: state.favorites.isRefreshing,
        isInitialLoad: state.favorites.isInitialLoad
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFavorites: () => dispatch(getFavorites())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesView)
