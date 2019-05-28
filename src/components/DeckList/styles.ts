import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View(({ background }) => ({
    flex: 1,
    background: background,
}));

export const DeckScroll = styled.ScrollView.attrs({
    contentContainerStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})`
    flex: 1;
`;

export const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});
