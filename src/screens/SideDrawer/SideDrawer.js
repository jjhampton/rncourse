import React, { Component } from 'react';
import { View, Text, Dimensions, Stylesheet } from 'react-native';

class SideDrawer extends Component {
    render() {
        return (
            <View style={{width: Dimensions.get('window').width * 0.8}}>
                <Text>Sidedrawer</Text>
            </View>
        );
    }
}

export default SideDrawer;