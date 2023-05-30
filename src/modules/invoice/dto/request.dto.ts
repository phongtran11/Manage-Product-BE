import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Types } from 'mongoose';

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
  @IsNumber()
  weightCancelSG: number;

  @IsOptional()
  @IsString()
  reasonCancelSG: string;

  @IsOptional()
  @IsNumber()
  weightCancelDL: number;

  @IsOptional()
  @IsString()
  reasonCancelDL: string;
}

export class QueryListInvoiceDto extends PaginateQueryDto {}

export class QueryDetailInvoiceDto {
  @Transform(({ value }) => new Types.ObjectId(value))
  @IsNotEmpty()
  id: Types.ObjectId;
}

export class PatchInvoiceDto {
  @IsOptional()
  @IsString()
  customerName: string;

  @IsOptional()
  @IsString()
  productName: string;

  @IsOptional()
  @IsString()
  type: string;

  @IsOptional()
  @IsNumber()
  weightWrapper: number;

  @IsOptional()
  @IsNumber()
  amountBox: number;

  @IsOptional()
  @IsNumber()
  weightBoxAndPackage: number;

  @IsOptional()
  @IsDateString()
  dateImport: Date;

  @IsOptional()
  @IsNumber()
  weightCancelSG: number;

  @IsOptional()
  @IsString()
  reasonCancelSG: string;

  @IsOptional()
  @IsNumber()
  weightCancelDL: number;

  @IsOptional()
  @IsString()
  reasonCancelDL: string;
}
