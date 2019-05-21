import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import SearchScreen from './pages/Search';
import React from 'react';

import DeckList from '~/pages/DeckList';
import AppHeader from './components/AppHeader';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

const tabs = createMaterialBottomTabNavigator(
    {
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
    },
    {
        initialRouteName: 'search',
    },
);

const navStack = createStackNavigator(
    { home: tabs },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            header: <AppHeader />,
        }),
    },
);

const App = createAppContainer(navStack);

export default App;
