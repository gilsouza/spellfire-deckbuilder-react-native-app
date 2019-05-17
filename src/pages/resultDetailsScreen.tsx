import React, { Component } from 'react';
import { Provider } from 'react-redux';

import CardList from '~/components/CardList';

import store from '~/store';

export default class ResultDetailsScreen extends Component {
    static navigationOptions = {
        title: 'Result Details',
    };

    render() {
        return (
            <Provider store={store}>
                <CardList />
            </Provider>
        );
    }
}
