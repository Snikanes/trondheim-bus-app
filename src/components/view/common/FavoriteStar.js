import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import { colors } from '../../../styles'

class FavoriteStar extends React.PureComponent {

    constructor() {
        super()
        this.state = {
            didChangeFavoriteStatus: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.isFavorite !== this.props.isFavorite) {
            this.setState({ didChangeFavoriteStatus: false })
        }
    }


    render() {
        const { pressHandler, isFavorite } = this.props
        return (
            this.state.didChangeFavoriteStatus ?
                <ActivityIndicator/>
                :
                <TouchableOpacity onPress={() => {
                    pressHandler()
                    this.setState({ didChangeFavoriteStatus: true })
                }}>
                    <Ionicons name="md-star" size={30} color={isFavorite ? colors.favStarColor : colors.favStarColorNonFavorite} />
                </TouchableOpacity>
        )
    }
}

export default FavoriteStar