import { BaseEntity, Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cards } from './cards';

@Entity('')
@Index('sqlite_autoindex_cards_attributes_2', ['attributes'], { unique: true })
@Index('sqlite_autoindex_cards_attributes_1', ['aIndex'], { unique: true })
export class CardsAttributes extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'integer',
        name: 'aIndex',
    })
    public aIndex: number;

    @Column('varchar', {
        nullable: true,
        unique: true,
        length: 128,
        name: 'attributes',
    })
    public attributes: string | null;

    @OneToMany(type => Cards, cards => cards.aIndex)
    public cardss: Cards[];

    public constructor(init?: Partial<CardsAttributes>) {
        super();
        Object.assign(this, init);
    }
}
