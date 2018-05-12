import React from "react";
import { Text, View, StyleSheet } from "react-native";
import NavigationBar from "react-native-navbar";

export default class NavBar extends React.Component {
  render() {
    return (
      <View style={styles.navbar}>
        <Text  style={styles.text}> BlockTree </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    height: 46,
    width: 375,
    backgroundColor: "#1dc890",
    position: "absolute",
    top: 0,
    flex: 1,
    alignSelf: "stretch",
    right: 0,
    left: 0
  },
  text : {
      color: 'white',
      fontSize : 30,
      fontWeight : 'bold',
      marginTop : 7
  }
});


