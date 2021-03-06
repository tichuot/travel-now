import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet, ListView, Text, TouchableOpacity } from 'react-native';

import { sub30 } from '../../utils';

const { height, width } = Dimensions.get('window');

export default class ItemListview extends Component {
    gotoDetails() {
        const { navigator } = this.props;
        navigator.push({
            name: 'home_details',
            id: this.props.id,
            imgSource: this.props.thumbnail,
            title: this.props.place_name,
            numStar: 2,
            numRate: 3
        });
    }

    render() {
        const { thumbnail, place_name } = this.props;
        const { item, thumb, titleStyle } = styles;
        return (
            <TouchableOpacity style={item} onPress={this.gotoDetails.bind(this)} >
                <Image style={thumb} source={{ uri: thumbnail }} />
                <Text style={titleStyle}>{sub30(place_name)}</Text>
            </TouchableOpacity>
        );
    }
}

var styles = StyleSheet.create({
    item: {
        justifyContent: 'center',
        padding: width / 150,
        backgroundColor: 'white',
    },
    thumb: {
        width: width * 0.6,
        height: width * 0.6 * 375 / 540,
        borderRadius: width / 150
    },
    titleStyle: {
        width: width * 0.6,
        flex: 1,
        paddingTop: 10,
        fontWeight: 'bold',
        color: 'black',
        flexWrap: 'wrap'
    }
});