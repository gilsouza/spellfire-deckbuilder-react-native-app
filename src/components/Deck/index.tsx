import { Theme, Card as CardComponent, Button, Title } from 'react-native-paper';
import { Component } from 'react';
import { Card } from '~/store/ducks/cards';
import { ApplicationState } from '~/store';
import { styles } from './style';
import React from 'react';

interface Props {
    theme: Theme;
}

interface StateProps {
    cards: Card[];
    name: string;
    description: string;
}

interface DispatchProps {
    loadRequest(): void;
}

type myProps = StateProps & DispatchProps & Props;

class Deck extends Component<myProps> {
    render() {
        const {
            theme: {
                colors: { background },
            },
        } = this.props;

        return (
            <CardComponent style={styles.card}>
                <Title>lalala</Title>
                {/* <CardComponent.Cover source={require('../assets/forest.jpg')} /> */}
                <CardComponent.Actions>
                    <Button onPress={() => {}}>Share</Button>
                    <Button onPress={() => {}}>Explore</Button>
                </CardComponent.Actions>
            </CardComponent>
        );
    }
}

// const mapStateToProps = (state: ApplicationState) => ({
//     deck: state.deck.data,
// });

// const mapDispatchToProps = (dispatch: Dispatch) =>
//     bindActionCreators(
//         { loadFailure: loadFailureAction, loadRequest: loadRequestAction, loadSuccess: loadSuccessAction },
//         dispatch,
//     );

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(DeckList);
