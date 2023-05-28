import { Exclude, Expose } from 'class-transformer';
import { ERoles } from 'src/databases';

@Exclude()
export class SignInResponseDto {
  @Expose()
  id: string;

  @Expose()
  username: string;

  @Expose()
  displayname: string;

  @Expose()
  role: ERoles;
}
