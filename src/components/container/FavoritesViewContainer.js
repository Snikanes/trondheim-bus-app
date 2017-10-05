import { connect } from 'react-redux'

import FavoritesView from '../view/FavoritesView'

const mapStateToProps = state => {
    return {
        favorites: state.favorites.favorites
    }
}

export default connect(mapStateToProps, null)(FavoritesView)
