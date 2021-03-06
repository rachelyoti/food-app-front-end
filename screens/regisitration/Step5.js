import React from "react";
import { 
  Alert,
  Linking,
  Dimensions,
  LayoutAnimation,
  Picker,
  Text,
  View,
  Vibration,
  StatusBar,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
import NavBar from "./../../components/NavBar";
import styles from "./../../styles/qr";
import { BarCodeScanner, Permissions } from 'expo';

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


// const numbers = ['1','2','3','4','5','6','7','8','9','10']
const numbers =['POUNDS', 'KGS']
export default class Step5 extends React.Component {
  constructor(props) {
    super(props);
    console.log("step5 ", props.navigation.state.params)
    const state =  props.navigation.state.params
    this.state = Object.assign({}, state, {});
    this.state.package["packageId"] = "-1";
    console.log("step5 state", this.state)
  }

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = result => {
    if (result.data !== this.state.lastScannedUrl) {
      LayoutAnimation.spring();
      this.setState({ lastScannedUrl: result.data });
      this.state.package["packageId"] = result.data;
      console.log("SCANNED " + result.data);
      console.log("post scan state --> ", this.state);
      console.log("Package data", this.state.package);


      // Hit composer END point to create package
      fetch('https://webhook.site/52f2ad00-5eb5-4546-878d-98812af2abd4', {
      // fetch('http://1a24b2aa.ngrok.io/api/grownyc.Package', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.package),
      }).then(res =>{
        const { navigate } = this.props.navigation;
        console.log("res>>", res);
        return navigate("Reg6");
      })

      Vibration.vibrate()
      // Alert.alert(
      //   'Open this URL?',
      //   this.state.lastScannedUrl,
      //   [
      //     {
      //       text: 'Yes',
      //       onPress: () => Linking.openURL(this.state.lastScannedUrl),
      //     },
      //     { text: 'No', onPress: () => {} },
      //   ],
      //   { cancellable: false }
      // );
    }
  };  

  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
      <NavBar />
      <Text style={styles.stepText}>STEP 5</Text>
                  <View style={styles.container}>

        {this.state.hasCameraPermission === null
          ? <Text>Requesting for camera permission</Text>
          : this.state.hasCameraPermission === false
              ? <Text style={{ color: '#fff' }}>
                  Camera permission is not granted
                </Text>
              : <BarCodeScanner
                  onBarCodeRead={this._handleBarCodeRead}
                  style={{
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                  }}
                />}

        {this._maybeRenderUrl()}

        <StatusBar hidden />
      </View>

{/*       {
        this.state.package.packageId &&
          <Button
            onPress={() => navigate('Reg6', this.state)}
            title="Next Step"
            large={true}
            backgroundColor="#1dc890"
            containerViewStyle={styles.buttonContainer}
          />
      } */}           
      </View>
    );
  }

  _handlePressUrl = () => {
    Alert.alert(
      'Open this URL?',
      this.state.lastScannedUrl,
      [
        {
          text: 'Yes',
          onPress: () => Linking.openURL(this.state.lastScannedUrl),
        },
        { text: 'No', onPress: () => {} },
      ],
      { cancellable: false }
    );
  };

  _handlePressCancel = () => {
    this.setState({ lastScannedUrl: null });
  };

  _maybeRenderUrl = () => {
    if (!this.state.lastScannedUrl) {
      return;
    }

    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
          <Text numberOfLines={1} style={styles.urlText}>
            {this.state.lastScannedUrl}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={this._handlePressCancel}>
          <Text style={styles.cancelButtonText}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

}
