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
    const data = props.navigation.state.params.data
    console.log("step3 ", data)
    this.state = { food: "Asparagus", data };
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <NavBar />
        <Text style={styles.stepText}>STEP 3</Text>
        <Text style={styles.subHeading}>Great. Let’s input your goods!.</Text>
        <Text style={styles.heading}>What is the food item?</Text>

        <Picker
          selectedValue={this.state.food}
          style={{ height: 50, width: 100 }}
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
            navigate("Reg3", {
              data: { user: this.state.user, food: this.state.food }
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
