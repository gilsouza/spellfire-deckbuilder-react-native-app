import React, { Component } from 'react';
import { Theme, Text, Appbar, withTheme } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container } from './styles';

interface Props {
    theme: Theme;
}

interface States {}

// const initialParams = {
//     showLeftIcon: true,
//     showSubtitle: true,
//     showSearchIcon: true,
//     showMoreIcon: true,
// };

class SearchScreen extends Component<Props> {
    // static navigationOptions = ({ navigation }) => {
    //     const params = { ...initialParams, ...navigation.state.params };

    //     return {
    //         tabBarIcon: ({ size, color }) => <Icon name="cards-variant" size={size} color={color} />,
    //         // header: (
    //         //     <Appbar.Header>
    //         //         <Appbar.Content title="Spellfire Deck Builderaaaaaa" />
    //         //         <Appbar.Action
    //         //             icon={({ size, color }) => <Icon name="import" size={size} color={color} />}
    //         //             onPress={() => console.log('Importar')}
    //         //         />
    //         //         <Appbar.Action icon="settings" onPress={() => console.log('Settings')} />
    //         //     </Appbar.Header>
    //         // ),
    //     };
    // };

    render() {
        const {
            theme: {
                colors: { background },
            },
        } = this.props;

        return (
            <Container background={this.props.theme.colors.background}>
                <Text>b</Text>
            </Container>
        );
    }
}

export default withTheme(SearchScreen);
