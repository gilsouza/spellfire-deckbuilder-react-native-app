import React, { Component } from 'react';
import { Theme, FAB, Text, SceneProps } from 'react-native-paper';

import { DeckContainer, Container, styles } from './styles';

interface Props {
    theme?: Theme;
    route: any;
    jumpTo: (key: string) => any;
}

interface States {}

type propss = { key: string; title: string; icon: string; color: string } & Props & SceneProps;

class DeckList extends Component<SceneProps<any>> {
    render() {
        return <Text>a</Text>;
    }
}

// const DeckList = () => <Text>Music</Text>;

export default DeckList;
