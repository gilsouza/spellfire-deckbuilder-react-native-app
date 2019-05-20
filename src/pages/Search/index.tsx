import React, { Component } from 'react';
import { Theme, Text, Appbar, withTheme } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container } from './styles';

interface Props {
    theme: Theme;
}

interface States {}

const initialParams = {
    showLeftIcon: true,
    showSubtitle: true,
    showSearchIcon: true,
    showMoreIcon: true,
};

class SearchScreen extends Component<Props> {
    static title = 'Appbar';
    static navigationOptions = ({ navigation }) => {
        const params = { ...initialParams, ...navigation.state.params };

        return {
            header: (
                <Appbar.Header>
                    <Appbar.Content title="Spellfire Deck Builder" />
                    <Appbar.Action
                        icon={({ size, color }) => <Icon name="import" size={size} color={color} />}
                        onPress={() => console.log('Importar')}
                    />
                    <Appbar.Action icon="settings" onPress={() => console.log('Settings')} />
                </Appbar.Header>
            ),
        };
    };

    render() {
        const {
            theme: {
                colors: { background },
            },
        } = this.props;

        return (
            <Container background={this.props.theme.colors.background}>
                <Text>a</Text>
            </Container>
        );
    }
}

export default withTheme(SearchScreen);
