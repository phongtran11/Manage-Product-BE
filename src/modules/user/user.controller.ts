import { Controller, Get, Logger, Param } from '@nestjs/common';
import { QueryUserParamsDto } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  async getListUser(@Param() params: QueryUserParamsDto) {
    const listUser = await this.userService.getListUser(params);

    Logger.log(listUser, 'ListUser');

    return listUser;
  }
}
