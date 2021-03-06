import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlaceList/PlaceList';


class FindPlaceScreen extends Component {

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === 'NavBarButtonPress' && event.id === 'sideDrawerToggle') {
            this.props.navigator.toggleDrawer({
                side: 'left',
                animated: true
            });
        }
    }

    itemSelectedHandler = key => {
        const selectedPlace = this.props.places.find(p => p.key === key);
        this.props.navigator.push({
            screen: 'awesome-places.PlaceDetailScreen',
            title: selectedPlace.name,
            passProps: {
                selectedPlace
            }
        });
    }

    render() {
        return (
            <View>
                <PlaceList
                    places={this.props.places}
                    onItemSelected={this.itemSelectedHandler}
                />
            </View>
        );
    }
}


const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}

export default connect(mapStateToProps)(FindPlaceScreen);