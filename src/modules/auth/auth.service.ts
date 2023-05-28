import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { UserService } from '../user';
import { SignInDto, SignUpDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10;

    return await bcrypt.hash(password, saltOrRounds);
  }

  async verifyUser({ username, password }: SignInDto) {
    const user = await this.userService.getUserByUsername(username);

    if (!user) throw new NotFoundException('Không tìm thấy tài khoản');

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      throw new BadRequestException('Tài khoản hoặc mật khẩu sai');

    return user;
  }

  async signUpUser(signUpDto: SignUpDto) {
    const userExists = await this.userService.getUserByUsername(
      signUpDto.username,
    );

    if (userExists) {
      throw new BadRequestException(
        `Tài khoản ${signUpDto.username} đã tồn tại`,
      );
    }

    const passwordHashed = await this.hashPassword(signUpDto.password);

    signUpDto.password = passwordHashed;

    return await this.userService.createUser(signUpDto);
  }
}
