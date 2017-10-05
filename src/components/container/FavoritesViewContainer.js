import { connect } from 'react-redux'

import FavoritesView from '../view/favorites/FavoritesView'

const mapStateToProps = state => {
    return {
        favorites: state.favorites.favorites
    }
}

export default connect(mapStateToProps, null)(FavoritesView)
