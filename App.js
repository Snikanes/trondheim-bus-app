import React from 'react';
import StopsScreen from './StopsScreen'
import DeparturesScreen from './DeparturesScreen'

import { StackNavigator } from 'react-navigation';

export default StackNavigator({
    Home: { screen: StopsScreen },
    Departures: { screen: DeparturesScreen }
});