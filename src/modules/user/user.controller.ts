import { Controller, Delete, Get, Logger, Param, Query } from '@nestjs/common';
import { DeleteUserParamsDto, QueryUserParamsDto } from './dto';
import { UserService } from './user.service';
import { Types } from 'mongoose';
import { ParseMongooseObjectID } from './user.pipe';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  async getListUser(@Query() query: QueryUserParamsDto) {
    const listUser = await this.userService.getListUser(query);

    Logger.log(listUser, 'ListUser');

    return listUser;
  }

  @Delete('delete/:id')
  async deleteUser(@Param('id', ParseMongooseObjectID) id: Types.ObjectId) {
    return await this.userService.deleteUser(id);
  }
}
