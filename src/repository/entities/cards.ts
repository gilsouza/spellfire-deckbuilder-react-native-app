import { BaseEntity, Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CardsAttributes } from './cardsAttributes';
import { CardsUses } from './cardsUses';
import { DeckJoinCards } from './deckJoinCards';

@Entity('')
@Index('cards_uIndex', ['uIndex'])
@Index('cards_cIndex', ['cIndex'])
@Index('cards_aIndex', ['aIndex'])
@Index('sqlite_autoindex_cards_1', ['cIndex'], { unique: true })
export class Cards extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'integer',
        name: 'cIndex',
    })
    public cIndex: number;

    @Column('text', {
        nullable: false,
        name: 'collection',
    })
    public collection: string;

    @Column('smallint', {
        nullable: false,
        width: 6,
        name: 'number',
    })
    public number: number;

    @Column('varchar', {
        nullable: true,
        length: 9,
        default: () => 'NULL',
        name: 'bonus',
    })
    public bonus: string | null;

    @Column('text', {
        nullable: false,
        name: 'type',
    })
    public type: string;

    @Column('text', {
        nullable: false,
        name: 'world',
    })
    public world: string;

    @Column('varchar', {
        nullable: false,
        length: 42,
        name: 'title',
    })
    public title: string;

    @Column('varchar', {
        nullable: true,
        length: 790,
        default: () => 'NULL',
        name: 'text',
    })
    public text: string | null;

    @Column('text', {
        nullable: false,
        name: 'frequency',
    })
    public frequency: string;

    @Column('varchar', {
        nullable: true,
        length: 158,
        default: () => 'NULL',
        name: 'blueline',
    })
    public blueline: string | null;

    @ManyToOne(type => CardsAttributes, cards_attributes => cards_attributes.cardss, { nullable: false })
    @JoinColumn({ name: 'aIndex' })
    public aIndex: CardsAttributes | null;

    @ManyToOne(type => CardsUses, cards_uses => cards_uses.cardss, { nullable: false })
    @JoinColumn({ name: 'uIndex' })
    public uIndex: CardsUses | null;

    @OneToMany(type => DeckJoinCards, deck_join_cards => deck_join_cards.cIndex)
    public deckJoinCardss: DeckJoinCards[];

    public constructor(init?: Partial<Cards>) {
        super();
        Object.assign(this, init);
    }
}
