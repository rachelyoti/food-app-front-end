import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import NavBar from './../components/NavBar'


export default class HomeScreen extends React.Component {


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <NavBar />
        <Text>Home </Text>
        <Button
            onPress={() => navigate('Registration')}
            title="Get Started"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
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
});
