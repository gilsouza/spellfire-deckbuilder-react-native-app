import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cards } from './cards';

@Entity('')
@Index('sqlite_autoindex_uses_2', ['Uses'], { unique: true })
@Index('sqlite_autoindex_uses_1', ['uIndex'], { unique: true })
export class Uses {
    @PrimaryGeneratedColumn({
        type: 'integer',
        name: 'uIndex',
    })
    public uIndex: number;

    @Column('varchar', {
        nullable: false,
        unique: true,
        length: 265,
        name: 'Uses',
    })
    public Uses: string;

    @OneToMany(type => Cards, cards => Cards.uIndex)
    public cardss: Cards[];
}
