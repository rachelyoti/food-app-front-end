import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import NavBar from './components/NavBar'

import HomeScreen from './screens/HomeScreen'
import Display from './screens/Display'

import Step1 from './screens/regisitration/Step1'
import Step2 from './screens/regisitration/Step2'
import Step3 from './screens/regisitration/Step3'
import Step4 from './screens/regisitration/Step4'
import Step5 from './screens/regisitration/Step5'
import Step6 from './screens/regisitration/Step6'


import ConsumerScan from './screens/consumer/Scan'
import ViewGood from './screens/consumer/ViewGood'

import {
  createStackNavigator,
} from 'react-navigation'



const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Reg1 : { screen : Step1 },
  Reg2 : { screen : Step2 },
  Reg3 : { screen : Step3 },
  Reg4 : { screen : Step4 },
  Reg5 : { screen : Step5 },
  Reg6 : { screen : Step6 },
  Display : { screen : Display },
  ConsumerScan : { screen : ConsumerScan },
  ViewGood : { screen : ViewGood}
});

export default App;