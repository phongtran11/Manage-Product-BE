import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { ERoles } from 'src/databases';

export class PaginateQueryDto {
  @IsNumber()
  @IsOptional()
  page?: number;

  @IsNumber()
  @IsOptional()
  limit: number;
}

export class QueryUserParamsDto extends PaginateQueryDto {
  @IsEnum(ERoles)
  role: ERoles;
}
