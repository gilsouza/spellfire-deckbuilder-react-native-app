import React from 'react';
import Routes from './routes';
import { StatusBar } from 'react-native';

const App = () => (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#9e9e9e" />
        <Routes />
    </>
);

export default App;
