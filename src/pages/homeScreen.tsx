import React, { Component } from 'react';
import { Provider } from 'react-redux';

import CardList from '~/components/CardList';

import store from '~/store';
import { View } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            // <Provider store={store}>
            <View>
                <CardList />
            </View>
            // </Provider>
        );
    }
}
