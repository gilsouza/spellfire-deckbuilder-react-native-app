import SQLite from 'react-native-sqlite-storage';

export default class DBClient {
    private readonly dbName = 'testSpellfire';
    private readonly dbLocation = 'default';
    private dbInstance: SQLite.SQLiteDatabase;
    private static instance: DBClient;

    private constructor() {
        SQLite.DEBUG(true);
        SQLite.enablePromise(true);
    }

    public static getInstance() {
        if (DBClient.instance) return DBClient.instance;
        else {
            DBClient.instance = new DBClient();
            return DBClient.instance.getDBClient();
        }
    }

    private getDBClient(): Promise<SQLite.SQLiteDatabase> {
        if (this.dbInstance) return Promise.resolve(this.dbInstance);

        const options: SQLite.DatabaseParams = {
            location: this.dbLocation,
            name: this.dbName,
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
