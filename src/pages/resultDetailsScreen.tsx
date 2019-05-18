import React, { Component } from 'react';
import { Provider } from 'react-redux';

import CardList from '~/components/CardList';

import store from '~/store';
import { View } from 'react-native';

export default class ResultDetailsScreen extends Component {
    static navigationOptions = {
        title: 'Result Details',
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
