import React from 'react';
import { StyleSheet, View } from 'react-native';

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
      <View style={styles.listContainer}>{placesOutput}</View>
    );
};


const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});

export default placeList;