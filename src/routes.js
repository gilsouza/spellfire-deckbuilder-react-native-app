import { createStackNavigator, createAppContainer } from 'react-navigation'; //Por botao

import Main from './pages/main';

const NavStack = createStackNavigator({
    Main,
});

const App = createAppContainer(NavStack);

export default App;
