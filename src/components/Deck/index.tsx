import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { Card as PaperDeck, IconButton, Theme, withTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from '~/store/ducks/cards';

import { DeckTitle, styles } from './style';

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

type MyProps = StateProps & DispatchProps & Props;

class Deck extends Component<MyProps> {
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
                            ToastAndroid.show('Exportação ainda não implementada', ToastAndroid.SHORT);
                        }}
                    />
                    <IconButton
                        icon={({ size, color }) => <Icon name="flask" size={size - 2} color={color} />}
                        style={styles.cardIconButton}
                        onPress={() => {
                            //  TODO:
                            ToastAndroid.show('Lab Deck ainda não implementado', ToastAndroid.SHORT);
                        }}
                    />
                    <IconButton
                        icon={({ size, color }) => <Icon name="dots-vertical" size={size - 2} color={color} />}
                        style={styles.cardIconButton}
                        onPress={() => {
                            //  TODO:
                            ToastAndroid.show('Opções ainda não implementado', ToastAndroid.SHORT);
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
