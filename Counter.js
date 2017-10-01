import React from 'react'
import { Button, Text, View } from 'react-native'

class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }

        this.incrementCount = this.incrementCount.bind(this)
    }

    incrementCount() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <View>
                <Text> {`Count ${this.state.counter}`} </Text>
                <Button
                    onPress={this.incrementCount}
                    title='Increment'
                />
            </View>
        )
    }
}

export default Counter