import React from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import { Button } from "react-native-elements";
import NavBar from "./../../components/NavBar";
import styles from "./../../styles/style";

const foods = [
  "Asparagus",
  "String Beans",
  "Shell Beans",
  "Beets",
  "Beet Greens",
  "Broccoli",
  "Brussels Sprout",
  "Cabbage",
  "Carrots",
  "Cauliflower",
  "Celery",
  "Collard Greens",
  "Corn",
  "Cucumbers"
];
export default class Step3 extends React.Component {
  constructor(props) {
    super(props);
    console.log("step3 ", props.navigation.state.params)
    const state =  props.navigation.state.params
    this.state = Object.assign({}, state, { food : "Asparagus" });
    console.log("step3 state", this.state)
  }

   _registerParticipant() {

      // Hit composer END point to create package
      fetch('https://webhook.site/0b2fa181-12ec-46bd-a509-f4a290b1eab1', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    this._registerParticipant()

    return (
      <View style={styles.container}>
        <NavBar />
        <Text style={styles.stepText}>STEP 3</Text>
        <Text style={styles.subHeading}>Great. Let’s input your goods!.</Text>
        <Text style={styles.heading}>What is the food item?</Text>

        <Picker
          selectedValue={this.state.food}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ food: itemValue })
          }
        >
          {foods.map(food => (
            <Picker.Item key={food} label={food} value={food} />
          ))}
        </Picker>
        <Button
          onPress={() =>
            navigate("Reg4", this.state)
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
