import styled from 'styled-components/native';
import { StyleSheet, Dimensions } from 'react-native';

export const DeckTitle = styled.Text.attrs({
    numberOfLines: 1,
    ellipsizeMode: 'tail',
})(({ color }) => ({
    paddingLeft: 4,
    paddingBottom: 4,
    paddingRight: 4,
    fontSize: 18,
    color: color,
}));

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 4,
    },
    title: {
        marginLeft: 10,
        fontSize: 18,
    },
    cardActions: {
        flex: 1,
        justifyContent: 'center',
    },
    cardIconButton: {
        marginLeft: 18,
        marginRight: 18,
    },
    deckContainer: {
        height: Dimensions.get('window').width / 2 - 8,
        width: '50%',
        padding: 4,
        marginTop: 15,
    },
    deckCover: {
        height: Dimensions.get('window').width / 2 - 90,
    },
});