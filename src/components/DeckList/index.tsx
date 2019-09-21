import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { FAB, Theme, withTheme } from 'react-native-paper';
import { NavigationScreenProps, withNavigation } from 'react-navigation';

import DeckCard from '~/components/DeckCard';

import { ApplicationState } from '~/store';

import { Deck } from '~/store/ducks/deck/types';
import * as DecksActions from '~/store/ducks/decks/actions';

import { Container, DeckScroll, styles } from './styles';

interface OwnProps extends NavigationScreenProps {
    theme: Theme;
}

interface StateAppProps {
    decks: Deck[];
}

interface DispatchProps {
    findDecksRequest(): void;
}

type Props = StateAppProps & DispatchProps & OwnProps;

class DeckList extends Component<Props> {
    constructor(props: Props) {
        super(props);
        const { findDecksRequest } = props;
        findDecksRequest();
    }

    newDeck() {
        const newDeck: Deck = {
            cards: [],
            description: '',
            name: 'Novo Deck',
        };
        return newDeck;
    }

    render() {
        const {
            theme: {
                colors: { background, primary },
            },
        } = this.props;

        return (
            <Container background={background}>
                <DeckScroll>
                    {this.props.decks.map((deck: Deck) => (
                        <DeckCard key={deck.dIndex} deck={deck} />
                    ))}
                </DeckScroll>
                <FAB
                    icon="plus"
                    color="#FFF"
                    theme={this.props.theme}
                    style={[styles.fab, { backgroundColor: primary }]}
                    onPress={() => {
                        this.props.navigation.navigate('deckEdit', { deck: { name: 'Novo Deck' } });
                        ToastAndroid.show('Adição de Deck ainda não implementado', ToastAndroid.SHORT);
                    }}
                />
            </Container>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    decks: state.decks.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(DecksActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withNavigation(withTheme(DeckList)));
