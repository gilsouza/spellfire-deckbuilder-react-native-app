import { withTheme, Theme, Card as PaperDeck, IconButton, Title } from 'react-native-paper';
import { Card } from '~/store/ducks/cards';
import { DeckTitle, styles } from './style';
import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
    theme: Theme;
}

interface StateProps {
    cards: Card[];
    name: string;
    description: string;
    image: string;
}

interface DispatchProps {
    loadRequest(): void;
}

type myProps = StateProps & DispatchProps & Props;

class Deck extends Component<myProps> {
    render() {
        const {
            theme: {
                colors: { background, text },
            },
        } = this.props;

        return (
            <PaperDeck style={styles.deckContainer}>
                <DeckTitle color={text}> Teste Deck </DeckTitle>
                <PaperDeck.Cover source={require('~/assets/card.jpg')} style={styles.deckCover} />
                <PaperDeck.Actions style={styles.cardActions}>
                    <IconButton
                        icon={({ size, color }) => <Icon name="share-variant" size={size - 2} color={color} />}
                        style={styles.cardIconButton}
                        onPress={() => {
                            //  TODO:
                            ToastAndroid.show('Exportação ainda não implementada', ToastAndroid.LONG);
                        }}
                    />
                    <IconButton
                        icon={({ size, color }) => <Icon name="flask" size={size - 2} color={color} />}
                        style={styles.cardIconButton}
                        onPress={() => {
                            //  TODO:
                            ToastAndroid.show('Lab Deck ainda não implementado', ToastAndroid.LONG);
                        }}
                    />
                    <IconButton
                        icon={({ size, color }) => <Icon name="dots-vertical" size={size - 2} color={color} />}
                        style={styles.cardIconButton}
                        onPress={() => {
                            //  TODO:
                            ToastAndroid.show('Opções ainda não implementado', ToastAndroid.LONG);
                        }}
                    />
                </PaperDeck.Actions>
            </PaperDeck>
        );
    }
}

export default withTheme(Deck);

// const mapStateToProps = (state: ApplicationState) => ({
//     deck: state.deck.data,
// });

// const mapDispatchToProps = (dispatch: Dispatch) =>
//     bindActionCreators(
//         { loadFailure: loadFailureAction, loadRequest: loadRequestAction, loadSuccess: loadSuccessAction },
//         dispatch,
//     );

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(DeckList);
