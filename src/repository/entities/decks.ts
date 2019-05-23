import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('')
// @Index('decks_dIndex', ['dIndex'])
// @Index('sqlite_autoindex_decks_1', ['dIndex'], { unique: true })
export class Decks {
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

    @Column('integer', {
        nullable: true,
        name: 'image',
    })
    public image: number | null;

    @Column('text', {
        nullable: true,
        name: 'cards',
    })
    public cards: string | null;
}
