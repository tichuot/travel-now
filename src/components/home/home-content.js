import React, { Component } from 'react';
import { View } from 'react-native';

import MyListView from './shared/list-view';
import Menu from './menu';

export default class HomeContent extends Component {
    render() {
        const { navigator } = this.props;
        return (
            <View>
                <Menu />
                <MyListView listTitle={'Gợi ý dành cho bạn'} navigator={navigator} />
                <MyListView listTitle={'Điểm đến'} navigator={navigator} />
                <MyListView listTitle={'Ăn uống'} navigator={navigator} />
            </View>
        );
    }
}