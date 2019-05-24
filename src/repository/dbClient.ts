import { Connection, createConnection } from 'typeorm/browser';
import { ReactNativeConnectionOptions } from 'typeorm/browser/driver/react-native/ReactNativeConnectionOptions';

import { Cards } from './entities/cards';
import { CardsAttributes } from './entities/cardsAttributes';
import { CardsUses } from './entities/cardsUses';
import { DeckJoinCards } from './entities/deckJoinCards';
import { Decks } from './entities/decks';

export default class DBClient {
    private static readonly DB_NAME = 'Spellfire.db';
    private static readonly DB_TYPE = 'react-native';
    private static readonly DB_LOCATION = 'Library';
    private static readonly DB_CREATE_FROM = '~Spellfire.db';

    private static instance: DBClient;

    private dbConnection: Connection | null = null;

    public static createConnection(): Promise<Connection> {
        if (DBClient.instance) return DBClient.instance.getDBConnection();
        else {
            DBClient.instance = new DBClient();
            return DBClient.instance.getDBConnection();
        }
    }

    public static closeConnection(): void {
        if (DBClient.instance && DBClient.instance.getDBConnection()) {
            DBClient.instance.closeConnection();
        }
    }

    private closeConnection(): void {
        if (this.dbConnection) {
            this.dbConnection
                .close()
                .then(() => {
                    this.dbConnection = null;
                })
                .catch((error: any) => {
                    // TODO:
                    console.error(error);
                    throw error;
                });
        }
    }

    private getDBConnection(): Promise<Connection> {
        if (this.dbConnection) return Promise.resolve(this.dbConnection);

        const options: ReactNativeConnectionOptions = {
            type: DBClient.DB_TYPE,
            database: DBClient.DB_NAME,
            location: DBClient.DB_LOCATION,
            extra: {
                createFromLocation: DBClient.DB_CREATE_FROM,
            },
            synchronize: false,
            entities: [Decks, CardsUses, CardsAttributes, DeckJoinCards, Cards],
            logging: true,
        };

        return createConnection(options)
            .then((connection: Connection) => {
                this.dbConnection = connection;
                return connection;
            })
            .catch((error: any) => {
                // TODO:
                console.error(error);
                throw error;
            });
    }
}
