import React, { Component } from 'react';
import { Provider } from 'react-redux';

import CardList from '~/components/CardList';

import store from '~/store';

// import { Lalala } from '~/components/FormSearch/index';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

export default class SearchScreen extends Component {
    static navigationOptions = {
        title: 'Search',
    };

    render() {
        return (
            // <Provider store={store}>
            <View>
                <CardList />
                <Button icon="add-a-photo" mode="contained" onPress={() => console.log('Pressed')}>
                    Press me
                </Button>
            </View>
            // </Provider>
        );
    }
}
