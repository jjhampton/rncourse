import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const buttonWithBackground = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button, {backgroundColor: props.color}]}>
            <Text>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
        padding: 10
    }
});

export default buttonWithBackground;