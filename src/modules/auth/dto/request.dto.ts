import { IsNotEmpty } from 'class-validator';
import { ERoles } from 'src/databases';

export class SignInDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}

export class SignUpDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  displayname: string;

  @IsNotEmpty()
  role: ERoles;
}
