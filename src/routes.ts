import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomeScreen from '~/pages/Home';
import SearchScreen from './pages/Search';

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

const navStack = createStackNavigator({
    home: { screen: HomeScreen },
});

// const deckStack = createStackNavigator({
//     home: { screen: HomeScreen },
// });

// const searchStack = createStackNavigator({
//     search: { screen: SearchScreen },
// });

// const tabs = createMaterialBottomTabNavigator(
//     {
//         search: { screen: searchStack },
//         deck: { screen: deckStack },
//     },
//     {
//         initialRouteName: 'search',
//     },
// );

const App = createAppContainer(navStack);

export default App;
