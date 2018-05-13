import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export default class NavBar extends React.Component {
  render() {
    return (
      <View style={styles.navbar}>
        <Text  style={styles.text}> Localtrail </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar : {
    height: 46,
    backgroundColor: "#1dc890",
    position: "absolute",
    top: 0,
    flex: 1,
    right: 0,
    left: 0
  },
  text : {
      color : 'white',
      fontSize : 30,
      fontWeight : 'bold',
      marginTop : 7,
  },
  text2 : {
    color : 'white',
    fontSize : 30,
    fontWeight : 'bold',
    marginTop : 7,
    width : 100,
    textAlign : 'right',
    position: "absolute",
    top: 0,
    flex: 1,
    right: 0,
    marginRight : 15
  }
});


