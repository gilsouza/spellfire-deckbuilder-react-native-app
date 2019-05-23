import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Attributes } from './attributes';
import { Uses } from './uses';

@Entity('')
@Index('cards_Attributes', ['aIndex'])
@Index('cards_Uses', ['uIndex'])
@Index('cards_cIndex', ['cIndex'])
@Index('sqlite_autoindex_cards_1', ['cIndex'], { unique: true })
export class Cards {
    @PrimaryGeneratedColumn({
        type: 'integer',
        name: 'cIndex',
    })
    public cIndex: number;

    @Column('text', {
        nullable: false,
        name: 'Collection',
    })
    public Collection: string;

    @Column('smallint', {
        nullable: false,
        width: 6,
        name: 'Number',
    })
    public Number: number;

    @Column('varchar', {
        nullable: true,
        length: 9,
        default: () => 'NULL',
        name: 'Bonus',
    })
    public Bonus: string | null;

    @Column('text', {
        nullable: false,
        name: 'Type',
    })
    public Type: string;

    @Column('text', {
        nullable: false,
        name: 'World',
    })
    public World: string;

    @Column('varchar', {
        nullable: false,
        length: 42,
        name: 'Title',
    })
    public Title: string;

    @Column('varchar', {
        nullable: true,
        length: 790,
        default: () => 'NULL',
        name: 'Text',
    })
    public Text: string | null;

    @Column('text', {
        nullable: false,
        name: 'Frequency',
    })
    public Frequency: string;

    @Column('varchar', {
        nullable: true,
        length: 158,
        default: () => 'NULL',
        name: 'Blueline',
    })
    public Blueline: string | null;

    @ManyToOne(type => Attributes, attributes => Attributes.cardss, { nullable: false })
    @JoinColumn({ name: 'aIndex' })
    public aIndex: Attributes | null;

    @ManyToOne(type => Uses, uses => Uses.cardss, { nullable: false })
    @JoinColumn({ name: 'uIndex' })
    public uIndex: Uses | null;
}
