import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Invoice } from './entity/Invoice';
import { Product } from './entity/Product';
import { ProductDetail } from './entity/ProductDetail';
import { Supplier } from './entity/Supplier';
import { InvoiceDetail } from './entity/InvoiceDetail';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'webonlinesale',
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
});
AppDataSource.initialize();
