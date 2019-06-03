import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { USER_KEY } from '../config';
import { Auth } from 'aws-amplify';


class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    state = {
        username: '', 
        password: '',
    };


    
    logout = async () => {
        try {
            await Auth.signOut()
            this.props.navigation.navigate('Auth');
        } catch (err) {
            alert('error signing out...: ' + err)
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.homeView}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../assets/images/PickupSports_Logo.png')} />
                    </View>
                    <TouchableOpacity onPress={this.logout}>
                        <Text>Home Page</Text>
                    </TouchableOpacity>
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
    homeView: {
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

export default HomeScreen;