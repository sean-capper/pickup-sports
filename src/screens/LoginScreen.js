import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LoginInput from '../components/LoginInput';

import {USER_KEY} from '../config';

class LoginScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    state = { 
        username: '',
        password: '',
    };

    onChangeText = (key, value) => {
        this.setState({ [key]: value })
    }

    loginHandler = async () => {
        const { username, password } = this.state
        try { 
            // login with provider
            const user = await AsyncStorage.setItem(USER_KEY, username);
            alert('user successfully signed in:' + user);
            this.props.navigation.navigate('App');
        } catch (err) {
            alert('error: ' + err);
        }
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.loginView}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../assets/images/PickupSports_Logo.png')} />
                    </View>
                    <LoginInput 
                        loginHandler={this.loginHandler}
                        onUsernameChangeText={val => this.onChangeText('username', val)}
                        onPasswordChangeText={val => this.onChangeText('password', val)}
                        signupScreen={() => this.props.navigation.navigate('Signup')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: '#fff',
        backgroundColor: "#03A9F4",
    },
    loginView: {
        paddingTop: 50,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        borderColor: '#000',
        marginTop: '20%',
    },
});

export default LoginScreen;