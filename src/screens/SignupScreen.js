import React, { Component, Fragment } from 'react';
import { Image, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import SignupInput from '../components/SignupInput';
import { Auth } from 'aws-amplify';

const initalState = {
    username: '',
    password: '',
    email: '',
    authenticationCode: '',
    showConfirmation: false,
};


class SignupScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    state = initalState;

    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    signupHandler = async () => {
        const { username, password, email, phone_number } = this.state
        try {
            const success = await Auth.signUp({username, password, attributes: { email }})
            this.setState({ showConfirmation: true });
        } catch (err) {
            alert(err.message);
        }
    };

    confirmSignup = async() => {
        const { username, authenticationCode } = this.state;
        try {
            await Auth.confirmSignUp(username, authenticationCode)
            alert('You\'re account was created!');
            this.setState({ ...initalState });
            this.props.navigation.navigate('App')
        } catch (err) {
            alert(err.message);
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
            {
                !this.state.showConfirmation && (
                    <View style={styles.signupView}>
                        <View style={styles.logoContainer}>
                            <Image source={require('../assets/images/PickupSports_Logo.png')} />
                        </View>
                        <SignupInput 
                            signupHandler={this.signupHandler} 
                            onUsernameChangeText={val => this.onChangeText('username', val)}
                            onPasswordChangeText={val => this.onChangeText('password', val)}
                            onEmailChangeText={val => this.onChangeText('email', val)}
                            loginScreen={() => this.props.navigation.navigate('Login')}
                            />
                    </View>
                )
            }
            {
                this.state.showConfirmation && (
                    <Fragment>
                        <View style={styles.container}>
                            <View style={styles.inputGroup}>
                                <View style={styles.sectionStyle}>
                                    <TextInput
                                        style={styles.inputField}
                                        placeholder='Authentication code'
                                        autoCapitalize="none"
                                        placeholderTextColor='white'
                                        onChangeText={val => this.onChangeText('authenticationCode', val)}
                                    />
                                </View>
                                
                                <TouchableOpacity style={styles.signupButton} onPress={this.confirmSignup}>
                                    <Text style={styles.signupText}>Sign up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Fragment>
                )
            }
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
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
    },
    inputGroup: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff',
        width: '75%',
        marginTop: '25%',
        alignItems: 'stretch',
    },
    signupButton: {
        backgroundColor: '#1976D2',
        borderColor: '#1976D2',
        marginTop: 10,
        borderWidth: 2,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupText: {
        fontSize: 18,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#fff',
    },
    inputField: {
        flex: 1,
        textAlign: 'left',
        color: '#fff',
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#BBDEFB',
        height: 40,
        width: '100%',
        marginTop: 10,
    },
});

export default SignupScreen;