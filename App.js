import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, TextInput, View} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    })
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };


  render() {

    const placesOutput = this.state.places.map((place, idx) => (
      <ListItem key={idx} placeName={place} />
    ));
    
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
              placeholder='An awesome place'
              value={this.state.placeName}
              onChangeText={this.placeNameChangedHandler}
              style={styles.placeInput}
            />
          <Button 
            title='Add'
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}>
          </Button>
        </View>
        <View style={styles.listContainer}>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});
