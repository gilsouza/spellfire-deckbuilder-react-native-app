import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { cards } from './cards';

@Entity('')
@Index('sqlite_autoindex_attributes_2', ['Attributes'], { unique: true })
@Index('sqlite_autoindex_attributes_1', ['aIndex'], { unique: true })
export class Attributes {
    @PrimaryGeneratedColumn({
        type: 'integer',
        name: 'aIndex',
    })
    public aIndex: number;

    @Column('varchar', {
        nullable: false,
        unique: true,
        length: 128,
        name: 'Attributes',
    })
    public Attributes: string;

    @OneToMany(type => cards, cards => cards.aIndex)
    public cardss: cards[];
}
