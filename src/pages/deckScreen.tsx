import React, { Component } from 'react';
import { Provider } from 'react-redux';

import CardList from '~/components/CardList';

import store from '~/store';
import { View } from 'react-native';

export default class DeckInfoScreen extends Component {
    static navigationOptions = {
        title: 'Deck Info',
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
