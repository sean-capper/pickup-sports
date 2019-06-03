import React, { Component, Fragment } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LoginInput from '../components/LoginInput';
import { Auth } from 'aws-amplify';

const initialState = {
    username: '',
    password: '',
    user: {},
}

class LoginScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    state = {
        username: '',
        password: '',
        user: {},
    };

    onChangeText = (key, value) => {
        this.setState({ [key]: value })
    };

    loginHandler = async () => {
        const { username, password } = this.state
        await Auth.signIn(username, password)
        .then(user => {
            this.setState({ user });
            this.props.navigation.navigate('AuthLoading');
        })
        .catch(err => {
            alert("Error: " + err.message)
        })
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
    input: {
        width: 350,
        fontSize: 18,
        fontWeight: '500',
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        color: 'white',
        padding: 8,
        borderRadius: 14
      },
});

export default LoginScreen;