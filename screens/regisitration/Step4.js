import React from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import { Button } from "react-native-elements";
import NavBar from "./../../components/NavBar";
import styles from "./../../styles/style";


import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


// const numbers = ['1','2','3','4','5','6','7','8','9','10']
const numbers =['pounds', 'kgs']
export default class Step4 extends React.Component {
  constructor(props) {
    super(props);
    console.log("step4 ", props.navigation.state.params)
    const state =  props.navigation.state.params
    this.state = Object.assign({}, state, { quantity : "1", measurement: 'pounds' });
    console.log("step4 state", this.state)
  }
  
  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
      <NavBar />
      <Text style={styles.stepText}>STEP 4</Text>
      <Text style={styles.heading}>{`How many ?`}</Text>
      
      <FormLabel>Amount</FormLabel>
        <FormInput 
          onChangeText={(quantity)=>(this.setState({ quantity }))} 
          style={{ width : 100 }}/>
        <Picker
          selectedValue={this.state.measurement}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ measurement: itemValue })
          }
        >
          {numbers.map(number => (
            <Picker.Item key={number} label={number} value={number} />
          ))}
        </Picker>
        <Button
          onPress={() => navigate('Reg5', this.state)}
          title="Next Step"
          large={true}
          backgroundColor="#1dc890"
          containerViewStyle={styles.buttonContainer}
        />
      </View>
    );
  }
}
