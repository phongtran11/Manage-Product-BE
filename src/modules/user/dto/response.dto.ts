import { Exclude, Expose } from 'class-transformer';
import { ERoles } from 'src/databases';

@Exclude()
export class QueryUserResponseDto {
  @Expose()
  id: string;

  @Expose()
  username: string;

  @Expose()
  displayname: string;

  @Expose()
  role: ERoles;
}
