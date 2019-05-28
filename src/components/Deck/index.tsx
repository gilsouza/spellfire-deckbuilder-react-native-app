import React from 'react';
import { ToastAndroid } from 'react-native';
import { Card as PaperDeck, IconButton, Theme, withTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { DeckTitle, styles } from './style';

interface Props {
    theme: Theme;
}

interface StateProps {
    key: number;
    name: string;
    image: string;
}

type MyProps = StateProps & Props;

const Deck = (props: MyProps) => {
    const {
        theme: {
            colors: { text },
        },
    } = props;

    return (
        <PaperDeck style={styles.deckContainer}>
            <DeckTitle color={text}>{props.name}</DeckTitle>
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
};

export default withTheme(Deck);
