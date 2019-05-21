import styled from 'styled-components/native';
import { StyleSheet, Dimensions } from 'react-native';

export const DeckTitle = styled.Text.attrs({
    numberOfLines: 1,
    ellipsizeMode: 'tail',
})(({ color }) => ({
    padding: 8,
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
        height: Dimensions.get('window').width / 2 + 54,
        width: Dimensions.get('window').width / 2 - 20,
        marginLeft: 6,
        marginTop: 10,
    },
    deckCover: {
        height: Dimensions.get('window').width / 2 - 20,
    },
});
