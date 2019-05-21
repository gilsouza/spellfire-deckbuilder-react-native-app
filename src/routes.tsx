import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomeScreen from '~/pages/Home';
import SearchScreen from './pages/Search';

import { Appbar } from 'react-native-paper';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import DeckList from '~/pages/DeckList';
import AppHeader from './components/AppHeader';

// import SearchScreen from './pages/searchScreen';
// import ResultDetailsScreen from './pages/resultDetailsScreen';
// import DeckInfoScreen from './pages/deckScreen';

// const tabDeckNavigation = createMaterialTopTabNavigator(
//     {
//         search: SearchScreen,
//         detail: ResultDetailsScreen,
//         deck: DeckInfoScreen,
//     },
//     {
//         tabBarOptions: {
//             style: {
//                 backgroundColor: '#9e9e9e',
//             },
//         },
//     },
// );

// const navStack = createStackNavigator({
//     home: HomeScreen,
// }, {
//     navigationOptions: ({navigation}) => ({
//         header: (
//             <Appbar>
//             </Appbar>
//         ),
//     })
// });

// const navStack = createStackNavigator(
//     {
//         home: {
//             screen: HomeScreen,
//         },
//     },
//     {
//         defaultNavigationOptions: ({ navigation }) => ({
//             header: (
//                 <Appbar.Header>
//                     <Appbar.Content title="Spellfire Deck Builderaaaaaa" />
//                     <Appbar.Action
//                         icon={({ size, color }) => <Icon name="import" size={size} color={color} />}
//                         onPress={() => console.log('Importar')}
//                     />
//                     <Appbar.Action icon="settings" onPress={() => console.log('Settings')} />
//                 </Appbar.Header>
//             ),
//         }),
//     },
// );

const deckStack = createStackNavigator(
    {
        home: { screen: DeckList },
    },
    {
        // navigationOptions: {
        //     tabBarIcon: ({ size, color }) => <Icon name="cards-variant" size={size} color={color} />,
        // },
        defaultNavigationOptions: {
            header: null,
        },
    },
);

const searchStack = createStackNavigator(
    {
        search: { screen: SearchScreen },
    },
    {
        // navigationOptions: {
        //     tabBarIcon: ({ size, color }) => <Icon name="cards-variant" size={size} color={color} />,
        // },
        defaultNavigationOptions: {
            header: null,
        },
    },
);

const tabs = createMaterialBottomTabNavigator({
    deck: { screen: deckStack },
    search: { screen: searchStack },
});

const navStack = createStackNavigator(
    {
        home: {
            screen: tabs,
        },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            header: <AppHeader />,
        }),
    },
);

// initialRouteName: 'deck',

const App = createAppContainer(navStack);

export default App;
