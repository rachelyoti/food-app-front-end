import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import NavBar from './components/NavBar'

import HomeScreen from './screens/HomeScreen'
import Registration from './screens/Registration'
import Display from './screens/Display'

import {
  createStackNavigator,
} from 'react-navigation'



const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Registration : { screen : Registration },
  Display : { screen : Display }
});

export default App;