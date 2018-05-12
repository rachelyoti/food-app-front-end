import React from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import NavBar from "./../../components/NavBar";

export default class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { language: "java" };
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <Text style={styles.stepText}>STEP 1</Text>
        <Text style={styles.subHeading}>Let's get started.</Text>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }
          prompt="I am a"
        >
          <Picker.Item label="Farm" value="farm" />
          <Picker.Item label="Warehouse" value="warehouse" />
          <Picker.Item label="Market" value="market" />
          <Picker.Item label="Retail" value="retail" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepText: {
    fontSize : 10
  },
  subHeading : {
    fontSize : 20
  }
});
