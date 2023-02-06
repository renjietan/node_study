import { Body, Controller, Get, Param, Post, Query, Request } from '@nestjs/common';
import { Req } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger/dist';
import { UserDto } from './dto/userDto';
import { UserService } from './user.service';

@ApiTags("user")
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Post("add")
    add(@Query() query: UserDto) {
        console.log("==========================", query);
        this.userService.add(query);
        return {
            code: 20000,
            msg: query,
        }
    }
    @Get("getList")
    getList() {
        return this.userService.getList()
    }
}
