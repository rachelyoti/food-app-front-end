import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import NavBar from './components/NavBar'

import HomeScreen from './screens/HomeScreen'
import Display from './screens/Display'

import Step1 from './screens/regisitration/Step1'

import {
  createStackNavigator,
} from 'react-navigation'



const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Reg1 : { screen : Step1 },
  Display : { screen : Display }
});

export default App;