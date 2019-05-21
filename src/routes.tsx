import React from 'react';

import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import SearchScreen from './pages/Search';
import DeckList from '~/pages/DeckList';

import AppHeader from './components/AppHeader';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { NavigationScreenProps } from 'react-navigation';

const deckStack = createStackNavigator(
    { home: DeckList },
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
    { home: tabs },
    {
        defaultNavigationOptions: () => ({
            header: <AppHeader />,
        }),
    },
);

const App = createAppContainer(navStack);

export default App;
