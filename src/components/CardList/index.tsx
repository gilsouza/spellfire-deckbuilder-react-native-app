import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../../store';
import { connect } from 'react-redux';
import { Card, loadFailure, loadRequest, loadSuccess } from '../../store/ducks/cards';

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
    bindActionCreators({ loadFailure, loadRequest, loadSuccess }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CardList);
