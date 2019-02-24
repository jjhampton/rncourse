import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Please Log In</Text>
                <Button title="Switch to Login" />
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Your E-Mail Address"
                        style={styles.input}
                        underlineColorAndroid="#01a299"
                    />
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        underlineColorAndroid="#01a299"
                    />
                    <TextInput
                        placeholder="Confirm Password"
                        style={styles.input}
                        underlineColorAndroid="#01a299"
                    />
                </View>
                <Button title="Submit" onPress={this.loginHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        width: '100%'
    }
});

export default AuthScreen;