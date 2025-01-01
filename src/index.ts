import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User, Photo } from './entity/User';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'webonlinesale',
    synchronize: true,
    logging: false,
    entities: [User, Photo],
    migrations: [],
    subscribers: [],
});
AppDataSource.initialize();
