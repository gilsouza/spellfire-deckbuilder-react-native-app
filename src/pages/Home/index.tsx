import React, { Component } from 'react';

import { Appbar, Theme, withTheme, BottomNavigation } from 'react-native-paper';
import { Container } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DeckList from '../DeckList';
import Search from '../Search';

interface Props {
    theme: Theme;
}

interface State {}

const initialParams = {
    showLeftIcon: true,
    showSubtitle: true,
    showSearchIcon: true,
    showMoreIcon: true,
};

class HomeScreen extends Component<Props> {
    state = {
        index: 0,
        routes: [
            {
                key: 'decks',
                title: 'decks',
                icon: ({ size, color }) => <Icon name="cards-variant" size={size} color={color} />,
            },
            {
                key: 'search',
                title: 'search',
                icon: ({ size, color }) => <Icon name="feature-search-outline" size={size} color={color} />,
            },
        ],
    };

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
                <BottomNavigation
                    navigationState={this.state}
                    onIndexChange={index => this.setState({ index })}
                    renderScene={BottomNavigation.SceneMap({
                        decks: DeckList,
                        search: Search,
                    })}
                />
            </Container>
        );
    }
}

export default withTheme(HomeScreen);
