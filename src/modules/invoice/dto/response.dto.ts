import { Exclude, Expose } from 'class-transformer';
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
  weightCancelSG: number;

  @Expose()
  reasonCancelSG: string;

  @Expose()
  weightCancelDL: number;

  @Expose()
  reasonCancelDL: string;

  @Expose()
  id: string;
}
