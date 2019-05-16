import React, { Component } from 'react';
import { Provider } from 'react-redux';

import CardList from './../components/CardList';

import store from './../store';

export default class Main extends Component {
    static navigationOptions = {
        title: 'Spellfire DeckBuilder',
    };

    render() {
        return (
            <Provider store={store}>
                <CardList />
            </Provider>
        );
    }
}
