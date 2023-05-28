import { Body, Controller, Logger, Post } from '@nestjs/common';
import { SignInDto, SignInResponseDto, SignUpDto } from './dto';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { plainToInstance } from 'class-transformer';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @Post('signIn')
  async signIn(@Body() signUpDto: SignInDto) {
    const user = await this.authService.verifyUser(signUpDto);

    Logger.log(user, 'SignIn');

    const payload = {
      username: user.username,
      id: user._id,
      role: user.role,
      displayname: user.displayname,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: plainToInstance(SignInResponseDto, user),
    };
  }

  @Post('signUp')
  async signUp(@Body() signUpDto: SignUpDto) {
    const user = await this.authService.signUpUser(signUpDto);

    Logger.log(user, 'SignUp');

    const payload = {
      username: user.username,
      id: user._id,
      role: user.role,
      displayname: user.displayname,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: plainToInstance(SignInResponseDto, user),
    };
  }
}
