import React from 'react'
import { FlatList, Text, StyleSheet, RefreshControl } from 'react-native'

import { colors, text } from '../../../styles'
import DeparturesListElement from '../../container/DeparturesListElementContainer'
import ListSeparator from '../common/ListSeparator'

class FavoritesList extends React.PureComponent {

    constructor(props) {
        super()
        this.state = {
            refreshing: false
        }
        this._onRefresh = this._onRefresh.bind(this)
    }

    _renderItem({ item }) {
        return <DeparturesListElement
            isFavorite
            locationId={item.locationId}
            direction={item.direction}
            name={item.name}
            departures={item.departures}
            line={item.line}
        />
    }
    //FIXME: Redux state does not work well with refresh, so the state needs to be local. Now I am
    //FIXME: performing a lookup into the redux state to tell if the request is done.
    componentWillReceiveProps(nextProps) {
        if(!nextProps.isRefreshing) {
            this.setState({refreshing: false})
        }
    }

    _onRefresh() {
        this.setState({refreshing: true})
        this.props.refreshHandler()
    }

    render() {

        return (
            <FlatList
                refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />}
                contentContainerStyle={this.props.favorites.length === 0 && styles.listEmptyStyle}
                data={this.props.favorites}
                renderItem={this._renderItem}
                ItemSeparatorComponent={() => <ListSeparator height={10}/>}
                keyExtractor={(item, index) => item.id}
                ListEmptyComponent={<Text style={[text.size.medium, styles.listEmptyText]}> {"Du har ingen favoritter. Søk etter en holdeplass og trykk på stjernen i avgangen du ønsker å legge til her."} </Text>}
            />
        )
    }
}

const styles = StyleSheet.create({
    listEmptyStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    listEmptyText: {
        textAlign: 'center',
        color: colors.mutedColor
    }
})

export default FavoritesList