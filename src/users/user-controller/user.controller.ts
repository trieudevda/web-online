/* eslint-disable prettier/prettier */
import {
    Controller,
    Get,
    Param,
    Res,
    HttpStatus,
    HttpCode,
} from '@nestjs/common';
import { Response } from 'express';
import { UserService } from '../user-service/UserService';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get('find/:id')
    async getOneUser(@Param('id') id: number, @Res() res: Response) {
        //return 'This action returns all cats';
        const data = await this.userService.getOneUser(id);
        return res
            .status(HttpStatus.OK)
            .send(data);
    }
    //@HttpCode(HttpStatus.OK)
    @Get('find-all/:offset?/:limit?')
    getAllUser(@Param('offset') offset?: number, @Param('offset') limit?: number, @Res() res?: Response) {
        let data = this.userService.getAllUser(offset, limit);
        //res
        //    .status(HttpStatus.OK)
        //    .send();
}
    @Get('find-all/:offset?/:limit?')
    getOneUserRefPhoto(@Param('id') id?: number, @Res() res?: Response) {}
}
