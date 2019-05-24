import { BaseEntity, Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cards } from './cards';

@Entity('')
@Index('sqlite_autoindex_cards_uses_2', ['uses'], { unique: true })
@Index('sqlite_autoindex_cards_uses_1', ['uIndex'], { unique: true })
export class CardsUses extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: 'integer',
        name: 'uIndex',
    })
    public uIndex: number;

    @Column('varchar', {
        nullable: false,
        unique: true,
        length: 265,
        name: 'uses',
    })
    public uses: string;

    @OneToMany(type => Cards, cards => cards.uIndex)
    public cardss: Cards[];

    public constructor(init?: Partial<CardsUses>) {
        super();
        Object.assign(this, init);
    }
}
