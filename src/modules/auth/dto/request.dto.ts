import { IsEnum, IsNotEmpty } from 'class-validator';
import { ERoles } from 'src/databases';

export class SignInDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}

export class SignUpDto {
  @IsNotEmpty({
    message: 'Yêu cầu tên tài khoản',
  })
  username: string;

  @IsNotEmpty({
    message: 'Yêu cầu tên mật khẩu',
  })
  password: string;

  @IsNotEmpty({
    message: 'Yêu cầu tên hiển thị',
  })
  displayname: string;

  @IsNotEmpty({
    message: 'Yêu cầu chức danh',
  })
  @IsEnum(ERoles, {
    message: 'Chức danh không hợp lệ',
  })
  role: ERoles;
}
