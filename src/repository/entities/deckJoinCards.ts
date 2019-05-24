import {
  BaseEntity,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { Cards } from './cards';
import { Decks } from './decks';

@Entity('')
@Index('decks_join_dIndex', ['dIndex'])
@Index('decks_join_djcIndex', ['djcIndex'])
@Index('decks_join_cIndex', ['cIndex'])
@Index('sqlite_autoindex_deck_join_cards_1', ['djcIndex'], { unique: true })
export class DeckJoinCards extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'integer',
        name: 'djcIndex',
    })
    public djcIndex: number;

    @ManyToOne(type => Decks, decks => decks.deckJoinCardss, { nullable: false })
    @JoinColumn({ name: 'dIndex' })
    public dIndex: Decks | null;

    @ManyToOne(type => Cards, cards => cards.deckJoinCardss, { nullable: false })
    @JoinColumn({ name: 'cIndex' })
    public cIndex: Cards | null;

    public constructor(init?: Partial<DeckJoinCards>) {
        super();
        Object.assign(this, init);
    }
}
