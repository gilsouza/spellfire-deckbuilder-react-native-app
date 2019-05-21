import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View(({ background }) => ({
    flex: 1,
    background: background,
}));

export const DeckScroll = styled.ScrollView.attrs({
    contentContainerStyle: {
        padding: 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})`
    flex: 1;
    padding-left: 10px;
    padding-right: 10px;
`;

export const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});
