import React from 'react';
import Routes from './routes';
import store from './store';

import { StatusBar } from 'react-native';
import { Theme, DarkTheme, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import DBClient from './repository/dbClient';

interface State {
    theme: Theme;
}

export class App extends React.Component<{}, State> {
    state = {
        theme: DarkTheme,
    };

    componentWillUnmount() {
        DBClient.closeConnection();
    }

    render() {
        return (
            <>
                <StatusBar barStyle="light-content" />
                <StoreProvider store={store}>
                    <PaperProvider theme={this.state.theme}>
                        <Routes />
                    </PaperProvider>
                </StoreProvider>
            </>
        );
    }
}

export default App;
