import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'; //Por botao

import SearchScreen from './pages/searchScreen';
import ResultDetailsScreen from './pages/resultDetailsScreen';
import DeckInfoScreen from './pages/deckScreen';

const tabDeckNavigation = createMaterialTopTabNavigator(
    {
        search: SearchScreen,
        detail: ResultDetailsScreen,
        deck: DeckInfoScreen,
    },
    {
        tabBarOptions: {
            style: {
                backgroundColor: '#9e9e9e',
            },
        },
    },
);

const navStack = createStackNavigator(
    {
        home: tabDeckNavigation,
    },
    {
        defaultNavigationOptions: {
            title: 'Spellfire Deck Builder',
            headerStyle: {
                backgroundColor: '#9e9e9e',
            },
            headerTintColor: '#FFF',
        },
    },
);
const App = createAppContainer(navStack);

export default App;
