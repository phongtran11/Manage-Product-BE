import { Transform } from 'class-transformer';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class PaginateQueryDto {
  @Transform(({ value }) => Number(value))
  @IsOptional()
  page?: number;

  @Transform(({ value }) => Number(value))
  @IsOptional()
  limit: number;
}

export class CreateInvoiceDto {
  @IsString()
  customerName: string;

  @IsString()
  productName: string;

  @IsString()
  type: string;

  @IsNumber()
  weightWrapper: number;

  @IsNumber()
  amountBox: number;

  @IsNumber()
  weightBoxAndPackage: number;

  @IsDateString()
  dateImport: Date;

  @IsOptional()
  weightCancelSG: number;

  @IsOptional()
  reasonCancelSG: string;

  @IsOptional()
  weightCancelDL: number;

  @IsOptional()
  reasonCancelDL: string;
}

export class QueryListInvoiceDto extends PaginateQueryDto {}
