import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';

import icBack from '../../../images/ic_back.png';

const { height, width } = Dimensions.get('window');

export default class HomeMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region:
            {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 1,
                longitudeDelta: 1
            },
            marker:
            {
                latitude: 0,
                longitude: 0
            }
        }
    }

    backToHomeMain() {
        const { navigator } = this.props;
        navigator.pop();
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                region:
                {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                },
                marker:
                {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            })
        })
    }

    render() {
        const { row, title, icon, wrapper, mapView, marker } = styles;
        return (
            <View style={wrapper}>
                <View style={row}>
                    <TouchableOpacity onPress={this.backToHomeMain.bind(this)}>
                        <Image source={icBack} style={icon} />
                    </TouchableOpacity>
                    <Text style={title}>Bản đồ</Text>
                    <Text />
                </View>
                <MapView
                    style={mapView}
                    initialRegion={this.state.region} >
                    <MapView.Marker
                        coordinate={this.state.marker} >
                        <Image source={require('../../../images/ic_circle.png')} style={marker} />
                    </MapView.Marker>
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:
    {
        flex: 1
    },
    title:
    {
        fontWeight: 'bold',
        fontSize: height / 35,
        color: 'white'
    },
    icon:
    {
        height: height / 25,
        width: height / 25
    },
    row:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: height / 50,
        backgroundColor: '#00c9ff'
    },
    mapView:
    {
        flex: 1
    },
    marker:
    {
        height: height / 10,
        width: height / 10
    }
});