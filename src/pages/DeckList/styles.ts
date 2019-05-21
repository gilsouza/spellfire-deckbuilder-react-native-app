import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View(({ background }) => ({
    flex: 1,
    background: background,
}));

export const DeckScroll = styled.ScrollView`
    flex: 1;
    padding-left: 10px;
    padding-right: 10px;
    /* flex-direction: row;
    flex-wrap: wrap; */
`;

export const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});
