/* eslint-disable prettier/prettier */
import {
    Controller,
    Get,
    Param,
    Res,
    HttpStatus,
    Query
} from '@nestjs/common';
import { Response } from 'express';
import { UserService } from '../user-service/user-service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('find/:id')
    async getOneUser(@Param('id') id: number, @Res() res?: Response) {
        const data = await this.userService.getOneUser(id);
        return res
            .status(HttpStatus.OK)
            .send(data);
    }
    
    @Get('find-all')
    // ?offset=1&limit=2&orderby=desc
    async getAllUser(@Query() query: any, @Res() res?: Response) {
        const dataquery = this.parseJson(query);
        const dataFind = {
            offset: dataquery["offset"],
            limit: dataquery["limit"],
            orderby: dataquery["orderby"],
        }
        const data = await this.userService.getAllUser(dataFind);
        return res
            .status(HttpStatus.OK)
            .send(data);
}
    //@Get('find-all/:offset?/:limit?')
    //getOneUserRefPhoto(@Param('id') id?: number, @Res() res?: Response) {}
    parseJson(query: any): JSON {
        return JSON.parse(JSON.stringify(query));
    }
}
