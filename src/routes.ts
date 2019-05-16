import { createStackNavigator, createAppContainer } from 'react-navigation'; //Por botao

import Main from './pages/main';

const NavStack = createStackNavigator(
    {
        Main,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#9e9e9e',
            },
            headerTintColor: '#000',
        },
    },
);

const App = createAppContainer(NavStack);

export default App;
