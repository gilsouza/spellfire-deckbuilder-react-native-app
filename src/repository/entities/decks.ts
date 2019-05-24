import { BaseEntity, Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { DeckJoinCards } from './deckJoinCards';

@Entity('')
@Index('sqlite_autoindex_decks_1', ['dIndex'], { unique: true })
export class Decks extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'integer',
        name: 'dIndex',
    })
    public dIndex: number;

    @Column('text', {
        nullable: false,
        name: 'name',
    })
    public name: string;

    @Column('text', {
        nullable: true,
        name: 'description',
    })
    public description: string | null;

    @Column('text', {
        nullable: true,
        name: 'image',
    })
    public image: string | null;

    @OneToMany(type => DeckJoinCards, deck_join_cards => deck_join_cards.dIndex)
    public deckJoinCardss: DeckJoinCards[];

    public constructor(init?: Partial<Decks>) {
        super();
        Object.assign(this, init);
    }
}
