import { Injectable, HttpStatus } from '@nestjs/common';
import { AppDataSource } from '../../../index';
import {  User } from '../../../entity/User';

@Injectable()
export class UserService {
    async addUser(): Promise<void> {
        //const user = new User();
        await AppDataSource.manager.save(User, {
            firstName: 'd and Bears',
        });
    }
    async getOneUser(id: number) {
        const user = await AppDataSource.manager
            .createQueryBuilder(User, 'user')
            .where('user.id = :id', { id: id })
            .getOne();
        return {
            user: user,
            status: user === null ? HttpStatus.FOUND : HttpStatus.OK,
        };
    }
    async getAllUser(dataFind) {
        const user = await AppDataSource.manager
            .createQueryBuilder(User, 'user')
            //.where('user.id = :id', { id: id })
            .skip(
                dataFind.offset === null && typeof dataFind.offset !== 'number'
                    ? 0
                    : dataFind.offset,
            ) // bỏ qua 10 user đầu
            .take(
                dataFind.limit === null && typeof dataFind.limit !== 'number'
                    ? 0
                    : dataFind.limit,
            )
            .orderBy(
                'user.id',
                dataFind.orderby !== null
                    ? dataFind.orderby.toLowerCase().trim() !== 'asc'
                        ? 'DESC'
                        : 'ASC'
                    : 'DESC',
            ); // theo thứ tự id cao và ngược lại

        return {
            user: user,
            status: user === null ? HttpStatus.FOUND : HttpStatus.OK,
        };
    }
    async getOneUserRefPhoto(id: Array<string>) {
        const user1 = await AppDataSource.manager
            .createQueryBuilder(User, 'user')
            .leftJoinAndSelect('user.photos', 'photo')
            .where('user.id = :id', { id: id })
            .getOne();
        //user1.photos.map((v, i) => {
        //    console.log('value', v);
        //    const xxd = v.id;
        //    console.log('value', xxd);
        //    console.log('index', i);
        //});
        //return user;
    }
}
