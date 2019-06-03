import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';

import {HomeScreen, LoginScreen, SignupScreen, AuthLoadingScreen } from './src/screens';

Amplify.configure(awsmobile);

const AppStack = createStackNavigator({
  Home: {screen: HomeScreen},
});
const AuthStack = createStackNavigator({
  Login: {screen: LoginScreen},
  Signup: {screen: SignupScreen},
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

