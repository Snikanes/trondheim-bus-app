import React, { PureComponent } from 'react'
import { FlatList, RefreshControl, StyleSheet, Text } from 'react-native'

import DeparturesListElement from '../../container/DeparturesListElementContainer'
import ListSeparator from '../common/ListSeparator'
import { colors, text } from '../../../styles'

//FIXME: Same issue as with favoritesList: refresh control does not correctly respond to redux state updates:
//Issue: https://github.com/facebook/react-native/issues/5839
class DeparturesList extends PureComponent {

    constructor() {
        super()
        this.state = {
            refreshing: false
        }
        this._onRefresh = this._onRefresh.bind(this)
    }

    _renderItem = ({ item }) => {
        const line = item[0].l
        const isFavorite = this.props.favorites.some(favorite => favorite.locationId === this.props.locationId && favorite.line === line)

        return <DeparturesListElement
            isFavorite={isFavorite}
            locationId={this.props.locationId}
            direction={this.props.direction}
            line={item[0].l}
            departures={item}
        />
    }

    componentWillReceiveProps(nextProps) {
        if(!nextProps.isLoading) {
            this.setState({ refreshing: false})
        }
    }

    _onRefresh() {
        this.setState({ refreshing: true })
        this.props.refreshHandler(this.props.locationId)
    }

    render() {
        const departuresMap = new Map()

        this.props.departures.forEach(departure => {
            if (!departuresMap.has(departure.l)) {
                departuresMap.set(departure.l, [])
            }
            departuresMap.get(departure.l).push(departure)
        })

        const departuresListData = Array.from(departuresMap.values())

        return (
            <FlatList
                contentContainerStyle={departuresListData.length === 0 && styles.listEmptyStyle}
                refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />}
                data={departuresListData}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => item[0].l}
                ItemSeparatorComponent={() => <ListSeparator height={10}/>}
                ListEmptyComponent={<Text style={[text.size.medium, styles.listEmptyText]}> {"Ingen avganger fra denne holdeplassen de neste timene"} </Text>}
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

export default DeparturesList