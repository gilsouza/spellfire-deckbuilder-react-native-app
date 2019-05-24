import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Theme } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '~/store';
import {
  Deck,
  loadFailureAction,
  loadRequestAction,
  loadSuccessAction
} from '~/store/ducks/decks';

interface Props {
    theme: Theme;
}

interface StateProps {
    decks: Deck[];
}

interface DispatchProps {
    loadRequest(): void;
}

type myProps = StateProps & DispatchProps & Props;

class DeckList extends Component<myProps> {
    render() {
        const { decks } = this.props;

        return (
            <View>
                {decks.map(card => (
                    <Text key={card.cIndex}>{card.name}</Text>
                ))}
            </View>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    decks: state.decks.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        { loadFailure: loadFailureAction, loadRequest: loadRequestAction, loadSuccess: loadSuccessAction },
        dispatch,
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DeckList);
