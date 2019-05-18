import React, { Component } from 'react';
import { Provider } from 'react-redux';

import CardList from '~/components/CardList';

import store from '~/store';

// import { Lalala } from '~/components/FormSearch/index';
import { View } from 'react-native';

import { Snackbar, Button } from 'react-native-material-ui';

import { StyleSheet } from 'react-native';

export default class SearchScreen extends Component {
    static navigationOptions = {
        title: 'Search',
    };

    render() {
        return (
            <Provider store={store}>
                <View>
                    <Button
                        primary
                        text="Primary"
                        style={{
                            container: style.container,
                        }}
                    />
                    <Button accent text="Accent" />
                    <Button raised primary text="Primary" />
                    <Button disabled text="Disabled" />
                </View>
            </Provider>
        );
    }
}

const style = StyleSheet.create({
    container: {
        width: '50%',
        borderColor: '#000',
        borderWidth: 2,
    },
});
