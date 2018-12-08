import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import PlaceInput from './src/components/PlaceInput/PlaceInput';

export default class App extends Component {
  state = {
    places: []
  } 

  placeAddedHandler = placeName => {
    this.setState(prevState => {
        return {
          places: prevState.places.concat(placeName)
        };
    });
  };

  render() {
    const placesOutput = this.state.places.map((place, idx) => (
      <ListItem key={idx} placeName={place} />
    ));
    
    return (
      <View style={styles.container}>
      <PlaceInput onPlaceAdded={this.placeAddedHandler}/>     
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
