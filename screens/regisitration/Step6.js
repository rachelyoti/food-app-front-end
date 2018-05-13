import React from "react";
import { 
  Alert,
  Linking,
  Dimensions,
  LayoutAnimation,
  Picker,
  Text,
  View,
  Vibration,
  StatusBar,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
import NavBar from "./../../components/NavBar";
import styles from "./../../styles/qr";
import { BarCodeScanner, Permissions } from 'expo';

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


export default class Step5 extends React.Component {
  constructor(props) {
    super(props);
    console.log("step6 ", props.navigation.state.params)
    const state =  props.navigation.state.params
    this.state = Object.assign({}, state);
    console.log("step6 state", this.state)
  } 

  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
      <NavBar />
      <Text style={styles.stepText}>Done</Text>
      <Text style={styles.heading}>Done</Text>
                  <View style={styles.container}>
      </View>
      <Button
          onPress={() => navigate('ConsumerScan')}
          title="Scan Goods"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
      />
      </View>
    );
  }

}
