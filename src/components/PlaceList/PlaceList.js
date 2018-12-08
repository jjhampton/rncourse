import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
    const placesOutput = props.places.map((place, idx) => (
        <ListItem
            key={idx}
            placeName={place}
            onItemPressed={() => props.onItemDeleted(idx)}
        />
    ));
    return (
      <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>
    );
};


const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});

export default placeList;