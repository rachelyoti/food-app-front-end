import React from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import { Button } from "react-native-elements";
import NavBar from "./../../components/NavBar";
import styles from "./../../styles/style";


import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


// const numbers = ['1','2','3','4','5','6','7','8','9','10']
const numbers =['POUNDS', 'KGS']
export default class Step4 extends React.Component {
  constructor(props) {
    super(props);
    console.log("step4 ", props.navigation.state.params)
    const state =  props.navigation.state.params;
    this.state = Object.assign({}, state, {});
    this.state.package["$class"] = "grownyc.Package";
    this.state.package["quantity"] = -1;
    this.state.package["quantityType"] = "POUNDS";

    // this.state = Object.assign({}, state, { package : {"$class": "grownyc.Package", quantity : -1, quantityType : "POUNDS"}  });
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
            onChangeText={(quantity)=>(this.setState({package :{ quantity : quantity }}))} 
            style={{ width : 100 }}/>
          <Picker
            selectedValue={this.state.package.quantityType}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({package:{ quantityType: itemValue }})
            }
          >
            {numbers.map(quantityType => (
              <Picker.Item key={quantityType} label={quantityType} value={quantityType} />
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
    )
  }
}
