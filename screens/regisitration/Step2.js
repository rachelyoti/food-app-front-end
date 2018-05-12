import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import { Button } from "react-native-elements";
import NavBar from "./../../components/NavBar";
import styles from "./../../styles/style";


export default class Step2 extends React.Component {
  constructor(props) {
    super(props);
    const data = props.navigation.state.params.data;
    this.state = { food: "Asparagus", data, farm : "" };
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <NavBar />
        <Text style={styles.stepText}>STEP 2</Text>
        <Text style={styles.subHeading}>Awesome, thanks!</Text>
        <Text style={styles.heading}>Which farm?</Text>

        <FormLabel>Name</FormLabel>
        <FormInput onChangeText={(text)=>(this.setState({ farm: text }))}/>
        <FormValidationMessage>Error message</FormValidationMessage>
        <Button
          onPress={() =>
            navigate("Reg3", {
              data: { user: this.state.user, farm : this.state.farm }
            })
          }
          title="Next Step"
          large={true}
          backgroundColor="#1dc890"
          containerViewStyle={styles.buttonContainer}
        />
      </View>
    );
  }
}
