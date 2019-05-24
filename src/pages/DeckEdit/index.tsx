import React, { Component } from 'react';
import { View, ToastAndroid } from 'react-native';
import { Appbar, Text, Theme, withTheme } from 'react-native-paper';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '~/store';
import { Card } from '~/store/ducks/cards/types';
import * as DeckActions from '~/store/ducks/deck/action';
import { Deck } from '~/store/ducks/deck/types';

interface OwnProps extends NavigationScreenProps {
    theme: Theme;
}

interface StateProps {
    deck: Deck;
}

interface DispatchProps {
    saveRequest(): void;
}

type Props = StateProps & DispatchProps & OwnProps;

interface State {
    editing: boolean;
    name: string;
    description: string;
    image: string;
    cards: Card[];
}

export class DeckEdit extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.props.navigation.setParams({
            deckName: this.props.deck.name,
        });
    }

    //TODO: Deixar header name mais rápido!
    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <Appbar.Header>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                    <Appbar.Content title={navigation.getParam('deckName', 'Edit Deck')} subtitle={null} />
                    <Appbar.Action
                        icon="more-vert"
                        onPress={() => {
                            ToastAndroid.show('Menu não implementado', ToastAndroid.SHORT);
                        }}
                    />
                </Appbar.Header>
            ),
        };
    };

    componentDidMount() {
        this.props.navigation.setParams({
            deckName: this.props.deck.name,
        });
    }

    render() {
        return (
            <View>
                <Text>lalal</Text>
            </View>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    deck: state.deck.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(DeckActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withTheme(DeckEdit));
