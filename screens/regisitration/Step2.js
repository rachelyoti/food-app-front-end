import React from "react";
import { StyleSheet, Text, View, Picker } from "react-native";


import { Button } from "react-native-elements";
import NavBar from "./../../components/NavBar";
import styles from "./../../styles/style";

const farms = [ "Bee Tree Berry", "Oakley Farm", "Tewksbury", "Yoti Farm"]

export default class Step2 extends React.Component {
  constructor(props) {
    super(props);
    console.log("step2 Props",props.navigation.state.params)
    const state = props.navigation.state.params
    this.state = Object.assign({}, state, {});
    this.state.participant["name"] = "Bee Tree Berry";
    this.state.participant["$class"] = "grownyc.SupplychainParticipant";
    console.log("step2 state", this.state)
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <NavBar />
        <Text style={styles.stepText}>STEP 2</Text>
        <Text style={styles.subHeading}>Awesome, thanks!</Text>
        <Text style={styles.heading}>Which farm?</Text>
        <Picker
            selectedValue={this.state.participant.name}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ name: itemValue })
            }
          >
          {farms.map(name => (
            <Picker.Item key={name} label={name} value={name} />
          ))}
        </Picker>
        <Button
          onPress={() =>
            navigate("Reg3", this.state)
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
