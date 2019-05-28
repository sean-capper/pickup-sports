import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
// import LoginScreen from './src/screens/LoginScreen';
// import SignupScreen from './src/screens/SignupScreen';
import {HomeScreen, LoginScreen, SignupScreen, AuthLoadingScreen } from './src/screens';

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

