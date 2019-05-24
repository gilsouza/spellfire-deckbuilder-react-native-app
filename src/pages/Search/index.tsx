import React, { Component } from 'react';
import { Text, Theme, withTheme } from 'react-native-paper';
import { NavigationProp } from 'react-navigation';

import { Container } from './styles';

interface Props {
    theme: Theme;
    navigation: NavigationProp<States>;
}

interface States {}

class SearchScreen extends Component<Props, States> {
    // static navigationOptions = ({ options, ...this.props}) => {
    //     const a = 'a';

    //     return {
    //         header: (
    //             <Appbar.Header>
    //                 <Appbar.BackAction onPress={() => props.navigation.goBack()} />
    //             </Appbar.Header>
    //         ),
    //     };
    // };

    // const params = { ...initialParams, ...navigation.state.params };

    // return {
    //     header: (
    //         <Appbar.Header>
    //             <Appbar.Content title="a" />
    //             <Appbar.Action
    //                 icon={({ size, color }) => <Icon name="import" size={size} color={color} />}
    //                 onPress={() => console.log('Importar')}
    //             />
    //             <Appbar.Action icon="settings" onPress={() => console.log('Settings')} />
    //         </Appbar.Header>
    //     ),
    // };

    a = this.props.theme;

    render() {
        const {
            theme: {
                colors: { background },
            },
        } = this.props;

        return (
            <Container background={background}>
                <Text>b</Text>
            </Container>
        );
    }
}

export default withTheme(SearchScreen);
