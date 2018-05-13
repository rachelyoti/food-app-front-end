import React from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import { Button } from "react-native-elements";
import NavBar from "./../../components/NavBar";
import styles from "./../../styles/style";

const subfoods = [
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

export default class Step4 extends React.Component {
  constructor(props) {
    super(props);
    console.log("step4", props.navigation.state.params)
    const state =  props.navigation.state.params
    this.state = Object.assign({}, state, { subfood : "" });
    console.log("step4 state", this.state)
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <NavBar />
        <Text style={styles.stepText}>STEP 4</Text>
        <Text style={styles.heading2}>{`What kind of ${this.state.food} ?`}</Text>

        <Picker
          selectedValue={this.state.subfood}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ subfood: itemValue })
          }
        >
          {subfoods.map(food => (
            <Picker.Item key={food} label={food} value={food} />
          ))}
        </Picker>
        <Button
          onPress={() =>
            navigate("Reg5", this.state)
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
