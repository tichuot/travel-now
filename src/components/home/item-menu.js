import React, { Component } from 'react';
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import EventView from './event/event';

const { height, width } = Dimensions.get('window');

export default class ItemMenu extends Component {
    gotoListLv1() {
        const { navigator, id } = this.props;
        if (!id) {
            navigator.push({ name: 'events' });
        } else {
            navigator.push({ name: 'list_lv1', title: this.props.title, id: id });
        }
    }

    render() {
        const { imgSource, title } = this.props;
        const { wrapper, img, titleStyle } = styles;
        return (
            <TouchableOpacity style={wrapper} onPress={this.gotoListLv1.bind(this)} >
                <Image source={imgSource} style={img} />
                <Text style={titleStyle}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:
    {
        width: width / 3,
        height: height / 7,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#f5f3f3',
        borderWidth: 0.5,
        backgroundColor: 'white'
    },
    img:
    {
        width: width / 15,
        height: width / 15
    },
    titleStyle:
    {
        color: 'black'
    }
});