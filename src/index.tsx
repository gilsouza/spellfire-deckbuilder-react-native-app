import React from 'react';
import Routes from './routes';
import store from './store';
import { StatusBar } from 'react-native';
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

const theme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: 'tomato',
        accent: 'yellow',
    },
};

const App = () => (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#9e9e9e" />
        <StoreProvider store={store}>
            <PaperProvider theme={theme}>
                <Routes />
            </PaperProvider>
        </StoreProvider>
    </>
);

export default App;
