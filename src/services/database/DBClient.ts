import SQLite from 'react-native-sqlite-storage';

export default class DBClient {
    private static readonly DB_NAME = 'teste.db';
    private static readonly DB_LOCATION = 'Library';
    private static readonly DB_CREATE_FROM = '~testSpellfire.db';
    private static instance: DBClient;

    //TODO:
    private dbInstance: SQLite.SQLiteDatabase;

    private constructor() {
        SQLite.DEBUG(true);
        SQLite.enablePromise(true);
    }

    public static getInstance() {
        if (DBClient.instance) return DBClient.instance.getDBClient();
        else {
            DBClient.instance = new DBClient();
            return DBClient.instance.getDBClient();
        }
    }

    private getDBClient(): Promise<SQLite.SQLiteDatabase> {
        if (this.dbInstance) return Promise.resolve(this.dbInstance);

        const options: SQLite.DatabaseParams = {
            createFromLocation: DBClient.DB_CREATE_FROM,
            location: DBClient.DB_LOCATION,
            name: DBClient.DB_NAME,
        };

        return SQLite.openDatabase(options)
            .then((db: SQLite.SQLiteDatabase) => {
                this.dbInstance = db;
                return db;
            })
            .catch((err: SQLite.SQLError) => {
                console.error(err);
                throw err;
            });
    }
}
