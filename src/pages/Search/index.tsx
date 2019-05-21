import React, { Component } from 'react';
import { Theme, Text, withTheme } from 'react-native-paper';

import { Container } from './styles';

interface Props {
    theme: Theme;
}

interface States {}

class SearchScreen extends Component<Props, States> {
    render() {
        const {
            theme: {
                colors: { background },
            },
        } = this.props;

        return (
            <Container background={background}>
                <Text>b</Text>
            </Container>
        );
    }
}

export default withTheme(SearchScreen);
