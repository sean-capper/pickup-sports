import React, {Component} from 'react';
import {TouchableOpacity, Text, TextInput, View, StyleSheet, Image } from 'react-native';

const SignupInput = props => {
    return (
        <View style={styles.inputGroup}>
            <View style={styles.sectionStyle}>
                <Image style={styles.usernameIcon} source={require('../assets/images/account_icon.png')} />
                <TextInput 
                    style={styles.inputField} 
                    placeholder="Username" 
                    placeholderTextColor='#fff'
                    autoCapitalize="none"
                    onChangeText={props.onUsernameChangeText}
                />
            </View>
            <View style={styles.sectionStyle}>
                <Image style={styles.lockIcon} source={require('../assets/images/lock.png')} />
                <TextInput 
                    style={styles.inputField} 
                    placeholder="Password" 
                    placeholderTextColor='#fff'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={props.onPasswordChangeText}
                />
            </View>
            {/* <View style={styles.sectionStyle}>
                <Image style={styles.lockIcon} source={require('../assets/images/lock.png')} />
                <TextInput 
                    style={styles.inputField} 
                    placeholder="Retype Password" 
                    placeholderTextColor='#fff'
                    secureTextEntry={true}
                />
            </View> */}
            <View style={styles.sectionStyle}>
                <Image style={styles.emailIcon} source={require('../assets/images/email_icon.png')} />
                <TextInput 
                    style={styles.inputField} 
                    placeholder="Email" 
                    placeholderTextColor='#fff'
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onChangeText={props.onEmailChangeText}
                />
            </View>

            <TouchableOpacity style={styles.signupButton} onPress={props.signupHandler}>
                <Text style={styles.signupText}>Sign up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.miscButton} onPress={props.loginScreen}>
                <Text style={styles.miscText}>Already have an account?</Text>
            </TouchableOpacity>
        </View>
    )  
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
        height: '100%',
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
    usernameIcon: {
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        height: 22,
        width: 16,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    lockIcon: {
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        height: 22,
        width: 16,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    emailIcon: {
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        height: 16,
        width: 22,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    phoneIcon: {
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        height: 24,
        width: 8,
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

export default SignupInput;