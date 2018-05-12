import React from "react";
import { StyleSheet, Text, View, Picker, Button } from "react-native";
import NavBar from "./../../components/NavBar";
import styles from './../../styles/style';

export default class Step2 extends React.Component {
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
        <Text style={styles.heading}>Who are you?</Text>
      </View>
    );
  }
}


