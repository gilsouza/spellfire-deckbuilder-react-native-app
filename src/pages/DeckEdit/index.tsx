import React, { Component } from 'react';
import { ToastAndroid, Image } from 'react-native';
import { Appbar, Theme, withTheme, List, Divider } from 'react-native-paper';
import { NavigationScreenProps, FlatList } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '~/store';
import { Card } from '~/store/ducks/cards/types';
import * as DeckActions from '~/store/ducks/deck/actions';
import { Deck } from '~/store/ducks/deck/types';

import { Container, DeckScroll } from './styles';
import { CardListImage } from '~/components/CardListImage';

interface OwnProps extends NavigationScreenProps {
    theme: Theme;
}

interface StateAppProps {
    deck: Deck;
}

interface DispatchProps {
    saveRequest(): void;
}

type Props = StateAppProps & DispatchProps & OwnProps;

interface State {
    editing: boolean;
    name: string;
    description?: string;
    image?: string;
    cards: Card[];
}

export class DeckEdit extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        const deck: Deck = props.navigation.getParam('deck');
        if (deck) {
            this.state = {
                description: deck.description,
                name: deck.name,
                cards: deck.cards,
                image: deck.image,
                editing: true,
            };
        }
    }

    static navigationOptions = ({ navigation }: NavigationScreenProps) => {
        const deck: Deck = navigation.getParam('deck');

        return {
            header: (
                <Appbar.Header>
                    <Appbar.BackAction onPress={() => navigation.goBack()} />
                    <Appbar.Content title={deck.name} subtitle={null} />
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

    renderItem({ item }) {
        return <CardListImage card={item} />;
    }

    keyExtractor(item: Card) {
        return item.cIndex.toString();
    }

    render() {
        const {
            theme: {
                colors: { background, primary },
            },
        } = this.props;

        return (
            <Container background={background}>
                <FlatList
                    contentContainerStyle={{ backgroundColor: background }}
                    ItemSeparatorComponent={Divider}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    data={this.state.cards}
                />

                <DeckScroll>{this.state.cards && this.state.cards.map((card: Card) => {})}</DeckScroll>
            </Container>
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
