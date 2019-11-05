import React from 'react';
import { Card } from '~/store/ducks/cards/types';
import { Image } from 'react-native';
import { List } from 'react-native-paper';

interface OwnProps {
    card: Card;
}

type Props = OwnProps;

const imageFromtype = (type: string) => {
    const typeNormalized = type.replace('Defensive-', '').replace('Offensive-', '');

    switch (typeNormalized) {
        case 'Ally': {
            return require('~/assets/Ally.png');
        }
        case 'Artifact': {
            return require('~/assets/Artifact.png');
        }
        case 'Blood-Ability': {
            return require('~/assets/Blood-Ability.png');
        }
        case 'Cards': {
            return require('~/assets/Cards.png');
        }
        case 'Champion': {
            return require('~/assets/Champion.png');
        }
        case 'Cleric': {
            return require('~/assets/Cleric.png');
        }
        case 'Cleric-Spell': {
            return require('~/assets/Cleric-Spell.png');
        }
        case 'Dragon-Unarmed-Combat': {
            return require('~/assets/Dragon-Unarmed-Combat.png');
        }
        case 'Dungeon': {
            return require('~/assets/Dungeon.png');
        }
        case 'Event': {
            return require('~/assets/Event.png');
        }
        case 'Hero': {
            return require('~/assets/Hero.png');
        }
        case 'Holding': {
            return require('~/assets/Holding.png');
        }
        case 'Magical-Item': {
            return require('~/assets/Magical-Item.png');
        }
        case 'Monster': {
            return require('~/assets/Monster.png');
        }
        case 'Monster-Ability': {
            return require('~/assets/Monster-Ability.png');
        }
        case 'Psionic-Power': {
            return require('~/assets/Psionic-Power.png');
        }
        case 'Realm': {
            return require('~/assets/Realm.png');
        }
        case 'Regent': {
            return require('~/assets/Regent.png');
        }
        case 'Rule': {
            return require('~/assets/Rule.png');
        }
        case 'Thief': {
            return require('~/assets/Thief.png');
        }
        case 'Thief-Ability': {
            return require('~/assets/Thief-Ability.png');
        }
        case 'Unarmed-Combat': {
            return require('~/assets/Unarmed-Combat.png');
        }
        case 'Undead-Unarmed-Combat': {
            return require('~/assets/Undead-Unarmed-Combat.png');
        }
        case 'Wizard': {
            return require('~/assets/Wizard.png');
        }
        case 'Wizard-Spell': {
            return require('~/assets/Wizard-Spell.png');
        }
        default: {
            return require('~/assets/notfound.png');
        }
    }
};

export const CardListItem = (props: Props) => {
    const sourceImage = imageFromtype(props.card.type);

    return (
        <List.Item
            key={props.card.cIndex}
            title={props.card.title}
            description={props.card.text}
            descriptionStyle={{ fontStyle: 'italic' }}
            style={{ height: 80 }}
            left={props => <Image style={{ width: 70, height: 70 }} source={sourceImage} />}
        />
    );
};
