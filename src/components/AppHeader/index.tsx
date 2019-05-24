import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { Appbar, Theme, withTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
    theme: Theme;
}

interface State {}

class AppHeader extends Component<Props, State> {
    render() {
        return (
            <Appbar.Header>
                <Appbar.Content title="Spellfire Deck Builder" />
                <Appbar.Action
                    icon={({ size, color }) => <Icon name="import" size={size} color={color} />}
                    onPress={() => {
                        //  TODO:
                        ToastAndroid.show('Importação ainda não implementada', ToastAndroid.LONG);
                    }}
                />
                <Appbar.Action
                    icon="settings"
                    onPress={() => {
                        //  TODO:
                        ToastAndroid.show('Opções ainda não implementado', ToastAndroid.LONG);
                    }}
                />
            </Appbar.Header>
        );
    }
}

export default withTheme(AppHeader);
