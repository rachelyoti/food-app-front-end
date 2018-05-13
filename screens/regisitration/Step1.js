import React from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import { Button } from 'react-native-elements';
import NavBar from "./../../components/NavBar";
import styles from './../../styles/style';
export default class Step1 extends React.Component {


guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

  constructor(props) {
    super(props);
    this.state = {};
    this.state.participant = {};
    this.state.participant = { participantType: "FARMER" };
    this.state.participant["address"] = "494 Benner Rd, Bellefonte, PA 16823, USA";
    this.state.participant["ID"] = this.guid();
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <NavBar />
        <Text style={styles.stepText}>STEP 1</Text>
        <Text style={styles.subHeading}>Let's get started.</Text>
        <Text style={styles.heading}>Who are you?</Text>

        <Picker
            selectedValue={this.state.user}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ user: itemValue })
            }
          >
          <Picker.Item label="Farmer" value="farmer" />
          <Picker.Item label="Warehouse" value="warehouse" />
          <Picker.Item label="Market" value="market" />
          <Picker.Item label="Retail" value="retail" />
          <Picker.Item label="Consumer" value="consumer" />
        </Picker>
        <Button
            onPress={() => navigate('Reg2', this.state)}
            title="Next Step"
            large={true}
            backgroundColor="#1dc890"
            containerViewStyle={styles.buttonContainer}
        />
      </View>
    );
  }
}


