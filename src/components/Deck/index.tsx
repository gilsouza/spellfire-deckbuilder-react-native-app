import React from 'react';
import { ToastAndroid } from 'react-native';
import { Card as PaperDeck, IconButton, Theme, withTheme, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { DeckTitle, styles } from './style';
import { NavigationScreenProps, withNavigation } from 'react-navigation';
import { Deck } from '~/store/ducks/deck/types';

interface OwnProps extends NavigationScreenProps {
    theme: Theme;
    deck: Deck;
}

type Props = OwnProps;

const Deck = (props: Props) => {
    const {
        theme: {
            colors: { text },
        },
    } = props;

    return (
        <PaperDeck style={styles.deckContainer}>
            <DeckTitle color={text}>{props.deck.name}</DeckTitle>

            <TouchableRipple
                onPress={() =>
                    props.navigation.navigate('deckEdit', {
                        deck: props.deck,
                    })
                }
            >
                <PaperDeck.Cover source={require('~/assets/card.jpg')} style={styles.deckCover} />
            </TouchableRipple>

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
};

export default withNavigation(withTheme(Deck));
