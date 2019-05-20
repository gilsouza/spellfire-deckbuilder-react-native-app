import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View(props => ({
    flex: 1,
    background: props.background,
}));

export const DeckContainer = styled.ScrollView`
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
