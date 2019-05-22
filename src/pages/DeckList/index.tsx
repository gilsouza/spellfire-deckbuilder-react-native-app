import React, { Component } from 'react';
import { Theme, withTheme, FAB } from 'react-native-paper';

import { Container, DeckScroll, styles } from './styles';
import DeckComponent from '~/components/Deck';
import { ToastAndroid } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { ApplicationState } from '~/store';
import { Deck } from '~/store/ducks/decks/types';

import { bindActionCreators, Dispatch } from 'redux';

import * as DecksActions from '~/store/ducks/decks/actions';
import { connect } from 'react-redux';
import DBClient from '~/services/database/DBClient';
import { SQLiteDatabase, ResultSet } from 'react-native-sqlite-storage';

interface OwnProps extends NavigationScreenProps {
    theme: Theme;
}

interface StateProps {
    decks: Deck[];
}

interface DispatchProps {
    loadRequest(): void;
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
    // state = {
    //     decks: [
    //         {
    //             title: 'Teste deck',
    //             image: 'lalala',
    //             cards: [
    //                 {
    //                     title: 'lalala t',
    //                     description: 'lalala d',
    //                 },
    //             ],
    //         },
    //     ],
    // };

    componentDidMount() {
        const { loadRequest } = this.props;

        loadRequest();
    }

    render() {
        const {
            theme: {
                colors: { background, primary },
            },
        } = this.props;

        DBClient.getInstance()
            .then((a: SQLiteDatabase) => {
                return a.executeSql('SELECT * FROM decks');
            })
            .then((a: ResultSet) => {
                debugger;
                console.log(a);
                return a;
            });

        return (
            <Container background={background}>
                <DeckScroll>
                    {this.props.decks.map((deck: Deck) => (
                        <DeckComponent key={deck.dIndex} />
                    ))}
                </DeckScroll>
                <FAB
                    icon="add"
                    color="#FFF"
                    style={[styles.fab, { backgroundColor: primary }]}
                    onPress={() => {
                        ToastAndroid.show('Adição de Deck ainda não implementado', ToastAndroid.LONG);
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
)(withTheme(DeckList));
