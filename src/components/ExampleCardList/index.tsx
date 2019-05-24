import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '~/store';
import {
  Card,
  loadFailureAction,
  loadRequestAction,
  loadSuccessAction
} from '~/store/ducks/cards';

interface StateProps {
    cards: Card[];
}

interface DispatchProps {
    loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class CardList extends Component<Props> {
    componentDidMount() {
        const { loadRequest } = this.props;

        loadRequest();
    }

    render() {
        const { cards } = this.props;

        return (
            <View>
                {cards.map(card => (
                    <Text key={card.cIndex}>{card.title}</Text>
                ))}
            </View>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    cards: state.cards.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        { loadFailure: loadFailureAction, loadRequest: loadRequestAction, loadSuccess: loadSuccessAction },
        dispatch,
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CardList);
