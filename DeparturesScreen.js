import React from 'react';
import { View, Text } from 'react-native'

class DeparturesScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            departures: []
        }
    }

    async componentDidMount() {
        const { params } = this.props.navigation.state;
        const departures = await this.getDepartures(params.stop.nodeId)
        console.log(params.stop.nodeId)
        console.log(departures)

        this.setState({
            departures: departures
        })
    }

    static navigationOptions = {
        title: 'Departures',
    }

    getDepartures(nodeId) {
        return fetch(`https://atbapi.tar.io/api/v1/departures/${nodeId}`)
            .then(result => result.json())
            .then(json => json.departures)
            .catch(err => console.error(err))
    }

    render() {
        const deps = this.state.departures.map(dep => {
            return (
                <View>
                    <Text> {dep.line} </Text>
                    <Text> {dep.scheduledDepartureTime} </Text>
                </View>
            )
        })

        return (
            <View>
                { deps }
            </View>
        );
    }
}


export default DeparturesScreen