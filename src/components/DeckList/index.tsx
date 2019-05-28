import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { FAB, Theme, withTheme } from 'react-native-paper';
import { NavigationScreenProps, withNavigation } from 'react-navigation';

import DeckComponent from '~/components/Deck';

import { ApplicationState } from '~/store';

import { Deck } from '~/store/ducks/deck/types';
import * as DecksActions from '~/store/ducks/decks/actions';

import { Container, DeckScroll, styles } from './styles';

interface OwnProps extends NavigationScreenProps {
    theme: Theme;
}

interface StateProps {
    decks: Deck[];
}

interface DispatchProps {
    findDecksRequest(): void;
}

type Props = StateProps & DispatchProps & OwnProps;

interface State {
    decks: {
        title: string;
        image: string;
        cards: {
            title: string;
            description: string;
        }[];
    }[];
}

class DeckList extends Component<Props, State> {
    componentDidMount() {
        const { findDecksRequest } = this.props;
        findDecksRequest();
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
                        <DeckComponent key={deck.dIndex} name={deck.name} image={deck.image} />
                    ))}
                </DeckScroll>
                <FAB
                    icon="add"
                    color="#FFF"
                    style={[styles.fab, { backgroundColor: primary }]}
                    onPress={() => {
                        this.props.navigation.navigate('deckEdit');
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
