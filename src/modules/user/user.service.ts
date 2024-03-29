import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { User } from 'src/databases';
import { SignUpDto } from '../auth/dto';
import { QueryUserParamsDto, QueryUserResponseDto } from './dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getUserByUsername(username: string) {
    return await this.userModel.findOne({ username: username });
  }

  async createUser(signUpDto: SignUpDto) {
    const user = await this.userModel.create(signUpDto);
    await user.save();
    return user;
  }

  async getListUser({ page, limit, ...params }: QueryUserParamsDto) {
    const users = await this.userModel.find(
      {
        ...params,
      },
      {},
      {
        limit: limit,
        skip: (page - 1) * limit,
      },
    );

    const total = await this.userModel.count({
      ...params,
    });

    const totalPage = Math.ceil(total / limit);

    return {
      data: plainToInstance(QueryUserResponseDto, users),
      totalRecord: total,
      totalPage: totalPage > 1 ? totalPage : 1,
      page,
      limit,
    };
  }

  async deleteUser(userId: Types.ObjectId) {
    return await this.userModel.deleteOne({ _id: userId });
  }
}
