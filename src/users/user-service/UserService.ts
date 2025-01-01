import { Injectable, HttpStatus } from '@nestjs/common';
import { AppDataSource } from '../..';
import { Photo, User } from '../../entity/User';

@Injectable()
export class UserService {
    async addUser(): Promise<void> {
        //const user = new User();
        await AppDataSource.manager.save(User, {
            firstName: 'd and Bears',
        });
    }
    async getOneUser(id: number) {
        let status = HttpStatus.OK;
        const user = await AppDataSource.manager
            .createQueryBuilder(User, 'user')
            .where('user.id = :id', { id: id })
            .getOne();
        return {
            user: user,
            status: user === null ? HttpStatus.FOUND : HttpStatus.OK,
        };
    }
    async getAllUser(offset?: number, limit?: number): Promise<any[]> {
        //const user = await AppDataSource.manager
        //    .createQueryBuilder(User, 'user')
        //    .where('user.id = :id', { id: id })
        //    .getRawMany();
        return [];
    }
    async getOneUserRefPhoto(id: Array<string>) {
        const user1 = await AppDataSource.manager
            .createQueryBuilder(User, 'user')
            .leftJoinAndSelect('user.photos', 'photo')
            .where('user.id = :id', { id: id })
            .getOne();
        user1.photos.map((v, i) => {
            console.log('value', v);
            const xxd = v.id;
            console.log('value', xxd);
            console.log('index', i);
        });
        //return user;
    }
}
