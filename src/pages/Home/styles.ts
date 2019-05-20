import styled from 'styled-components/native';

export const Container = styled.View(props => ({
    flex: 1,
    background: props.background,
}));

export const DeckList = styled.View`
    flex: 1;
`;
