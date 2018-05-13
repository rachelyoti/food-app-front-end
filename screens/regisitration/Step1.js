import React from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import { Button } from 'react-native-elements';
import NavBar from "./../../components/NavBar";
import styles from './../../styles/style';
export default class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: "farmer" };
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


