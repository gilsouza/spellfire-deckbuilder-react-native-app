import React, { Component } from 'react';
import { Provider } from 'react-redux';

import CardList from '~/components/CardList';

import store from '~/store';

import { Lalala } from '~/components/elements/index';
import { View } from 'react-native';

export default class SearchScreen extends Component {
    static navigationOptions = {
        title: 'Search',
    };

    render() {
        return (
            <Provider store={store}>
                <View>
                    <Lalala />
                </View>
            </Provider>
        );
    }
}
