import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const DeckTitle = styled.Text.attrs({
    numberOfLines: 1,
    ellipsizeMode: 'tail',
})(({ color }) => ({
    padding: 4,
    fontSize: 16,
    color: color,
}));

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        marginLeft: 10,
        fontSize: 18,
    },
    cardActions: {
        flex: 1,
        justifyContent: 'center',
        padding: 0,
        margin: 0,
    },
    cardIconButton: {
        marginLeft: 18,
        marginRight: 18,
    },
    deckContainer: {
        height: Dimensions.get('window').width / 2 + 40,
        width: Dimensions.get('window').width / 2 - 22,
        marginLeft: 15,
        marginTop: 15,
        padding: 4,
    },
    deckCover: {
        height: Dimensions.get('window').width / 2 - 40,
        marginTop: 4,
    },
});
