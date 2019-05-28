import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import AppHeader from './components/AppHeader';

import DeckEdit from './pages/DeckEdit';
import SearchScreen from './pages/Search';
import DeckListPage from '~/pages/DeckList';

const deckStack = createStackNavigator(
    {
        home: DeckListPage,
    },
    {
        defaultNavigationOptions: {
            header: null,
        },
    },
);

const searchStack = createStackNavigator(
    { search: SearchScreen },
    {
        defaultNavigationOptions: {
            header: null,
        },
    },
);

//  TODO: Criar ícones com thema corretamente
const tabs = createMaterialBottomTabNavigator({
    decks: {
        screen: deckStack,
        navigationOptions: {
            tabBarIcon: ({ size, color }) => <Icon name="cards-variant" size={size} color={color} />,
            tabBarLabel: 'Decks',
        },
    },
    search: {
        screen: searchStack,
        navigationOptions: {
            tabBarIcon: ({ size, color }) => <Icon name="feature-search-outline" size={size} color={color} />,
            tabBarLabel: 'Search',
        },
    },
});

const navStack = createStackNavigator(
    { home: tabs, deckEdit: DeckEdit },
    {
        defaultNavigationOptions: () => ({
            header: <AppHeader />,
        }),
    },
);

const App = createAppContainer(navStack);

export default App;
