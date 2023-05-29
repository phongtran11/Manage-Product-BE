import { Transform } from 'class-transformer';
import { IsEnum, IsOptional } from 'class-validator';
import { Types } from 'mongoose';
import { ERoles } from 'src/databases';

export class PaginateQueryDto {
  @Transform(({ value }) => Number(value))
  @IsOptional()
  page?: number;

  @Transform(({ value }) => Number(value))
  @IsOptional()
  limit: number;
}

export class QueryUserParamsDto extends PaginateQueryDto {
  @IsEnum(ERoles)
  @IsOptional()
  role: ERoles;
}

export class DeleteUserParamsDto {
  id: Types.ObjectId;
}
