import { Module } from '@nestjs/common';
import { UserService } from './user-service/UserService';
import { UserController } from './user-controller/user.controller';

@Module({
    providers: [UserService],
    controllers: [UserController],
})
export class UsersModule {}
