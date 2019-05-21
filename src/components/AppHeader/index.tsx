import React, { Component, ReactNode } from 'react';

import { Appbar, Theme, withTheme, BottomNavigation, Text } from 'react-native-paper';

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
                    onPress={() => console.log('Importar')}
                />
                <Appbar.Action icon="settings" onPress={() => console.log('Settings')} />
            </Appbar.Header>
        );
    }
}

export default withTheme(AppHeader);