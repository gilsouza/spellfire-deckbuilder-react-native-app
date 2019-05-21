import React, { Component } from 'react';
import { Appbar, Theme, FAB, Text, SceneProps, withTheme } from 'react-native-paper';

import { View } from 'react-native';

import { DeckContainer, Container, styles } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

const tabBarIcon = (name: string) => ({ size, color }) => <Icon name={name} size={size} color={color} />;

class DeckList extends Component<Props> {
    // static navigationOptions = ({ navigation }) => {
    //     const params = { ...initialParams, ...navigation.state.params };

    //     return {
    //         tabBarIcon: tabBarIcon('cards-variant'),
    //         // tabBarIcon: ({ size, color }) => <Icon name="cards-variant" size={size} color={color} />,
    //         // header: (
    //         //     <Appbar.Header>
    //         //         <Appbar.Content title="c" />
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

// const DeckList = () => <Text>Music</Text>;

export default withTheme(DeckList);
