import DBClient from '~/repository/dbClient';

import { Decks } from '~/repository/entities/decks';
import { Cards } from '~/repository/entities/cards';

import { Card } from '~/store/ducks/cards/types';
import { Deck } from '~/store/ducks/deck/types';

export default class DeckService {
    public async findAll(): Promise<Deck[]> {
        await DBClient.createConnection();
        const decks: Decks[] = await Decks.find();

        console.log(JSON.stringify(decks));

        const mapToDeck = async (deckEntity: Decks): Promise<Deck> => {
            let cardsEntity: Cards[];
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
            try {
                cardsEntity = await this.findDeckCards(deckEntity.dIndex);
                console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb');
            } catch (error) {
                console.log(error);
            }

            let cards: Card[] = cardsEntity.map(this.cardEntityToCard);

            console.log(JSON.stringify(cards));

            return {
                cards: cards,
                dIndex: deckEntity.dIndex,
                description: deckEntity.description,
                image: deckEntity.image,
                name: deckEntity.name,
            };
        };

        return Promise.all(decks.map(mapToDeck));
    }

    public find(): Promise<Deck> {}

    public save(): void {}

    private async findDeckCards(forDeck: number): Promise<Cards[]> {
        await DBClient.createConnection();
        return await Cards.createQueryBuilder('cards')
            .innerJoinAndSelect('cards.deckJoinCardss', 'deckJoinCards')
            .where('dIndex = :dIndex', { dIndex: forDeck })
            .getMany();
    }

    private cardEntityToCard(cardEntity: Cards): Card {
        return {
            aIndex: cardEntity.aIndex ? cardEntity.aIndex.aIndex : null,
            blueline: cardEntity.blueline,
            bonus: cardEntity.bonus,
            cIndex: cardEntity.cIndex,
            collection: cardEntity.collection,
            frequency: cardEntity.frequency,
            number: cardEntity.number,
            text: cardEntity.text,
            title: cardEntity.title,
            type: cardEntity.type,
            uIndex: cardEntity.uIndex ? cardEntity.uIndex.uIndex : null,
            world: cardEntity.world,
        };
    }
}
