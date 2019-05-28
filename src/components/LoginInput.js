import React, {Component} from 'react';
import {TouchableOpacity, Text, TextInput, View, StyleSheet, Image } from 'react-native';

const LoginInput = props => {
    return (
        <View style={styles.inputGroup}>
            <View style={styles.sectionStyle}>
                <Image style={styles.iconStyle} source={require('../assets/images/account_icon.png')} />
                <TextInput 
                    style={styles.inputField} 
                    placeholder="Username" 
                    placeholderTextColor='#fff'
                    onChangeText={props.onUsernameChangeText}
                />
            </View>
            <View style={styles.sectionStyle}>
                <Image style={styles.iconStyle} source={require('../assets/images/lock.png')} />
                <TextInput 
                    style={styles.inputField} 
                    placeholder="Password" 
                    placeholderTextColor='#fff'
                    secureTextEntry={true}
                    onChangeText={props.onPasswordChangeText}
                />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={props.loginHandler}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.miscButton} onPress={props.signupScreen}>
                <Text style={styles.miscText}>Create an Account</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputGroup: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff',
        width: '75%',
        marginTop: '25%',
        alignItems: 'stretch',
    },
    loginButton: {
        backgroundColor: '#1976D2',
        borderColor: '#1976D2',
        marginTop: 10,
        borderWidth: 2,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
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
    iconStyle: {
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        height: 22,
        width: 18,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    miscButton: {
        paddingTop: 40,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    miscText: {
        color: '#fff',
        fontSize: 14,
    },
});

export default LoginInput;