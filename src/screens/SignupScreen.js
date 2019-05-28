import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import SignupInput from '../components/SignupInput';


class SignupScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    state = {
        username: '', 
        password: '',
    };

    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    signupHandler = async () => {
        const { username, password } = this.state
        try {
            // signup logic here
            alert('user successfully signed up: ' + this.state.username);
            this.props.navigation.navigate('Login');
        } catch (err) {
            alert('error signing up: ' + err);
        }
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.signupView}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../assets/images/PickupSports_Logo.png')} />
                    </View>
                    <SignupInput 
                        signupHandler={this.signupHandler} 
                        onUsernameChangeText={val => this.onChangeText('username', val)}
                        onPasswordChangeText={val => this.onChangeText('password', val)}
                        loginScreen={() => this.props.navigation.navigate('Login')}
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
    signupView: {
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

export default SignupScreen;