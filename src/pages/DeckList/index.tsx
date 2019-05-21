import React, { Component } from 'react';
import { Theme, Text, withTheme } from 'react-native-paper';

import { Container, DeckScroll } from './styles';
import Deck from '~/components/Deck';
import { StyleSheet } from 'react-native';

interface Props {
    theme: Theme;
}

interface States {
    decks: {
        title: string;
        image: string;
        cards: {
            title: string;
            description: string;
        }[];
    }[];
}

class DeckList extends Component<Props, States> {
    state = {
        deck: [
            {
                title: 'Teste deck',
                image: 'lalala',
                cards: [
                    {
                        title: 'lalala t',
                        description: 'lalala d',
                    },
                ],
            },
        ],
    };

    render() {
        const {
            theme: {
                colors: { background },
            },
        } = this.props;

        return (
            <Container background={background}>
                <DeckScroll>
                    <Deck />
                    <Deck />
                    <Deck />
                </DeckScroll>
            </Container>
        );
    }
}

export default withTheme(DeckList);
