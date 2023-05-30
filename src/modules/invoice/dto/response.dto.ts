import { Exclude, Expose } from 'class-transformer';
import { Types } from 'mongoose';

@Exclude()
export class QueryInvoicesResponseDto {
  @Expose()
  dateImport: Date;

  @Expose()
  customerName: string;

  @Expose()
  productName: string;

  @Expose()
  type: string;

  @Expose()
  weightWrapper: number;

  @Expose()
  amountBox: number;

  @Expose()
  weightBoxAndPackage: number;

  @Expose()
  createdAt: Date;

  @Expose()
  cancelInfo: Types.ObjectId[];

  @Expose()
  id: string;
}
