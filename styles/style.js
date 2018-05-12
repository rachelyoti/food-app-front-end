import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start"
    },
    stepText: {
        marginTop: 80,
    fontSize: 10
  },
  subHeading: {
    marginTop: 80,
    fontSize: 20
  },
  heading: {
    fontSize: 50,
    fontWeight: "bold"
  },
  buttonContainer: {
    margin: 40,
    position: "absolute",
    bottom: 0
    // justifyContent : 'flex-end'
  }
});

export default styles;
