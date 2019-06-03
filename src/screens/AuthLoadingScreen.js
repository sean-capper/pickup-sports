import React, { Component } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Auth } from 'aws-amplify';


class AuthLoadingScreen extends Component {
  state = {
    userToken: null
  }

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.loadApp();
  };

  loadApp = async () => {
    await Auth.currentAuthenticatedUser()
    .then(user => {
      this.setState({ userToken: user.signInUserSession.accessToken.jwtToken });
    })
    .catch(err => {
      console.log(err);
    });
    this.props.navigation.navigate(this.state.userToken ? 'App' : 'Auth')
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      borderColor: '#fff',
      backgroundColor: "#03A9F4",
      alignItems: 'center',
      justifyContent: 'center',
  },
});

export default AuthLoadingScreen;