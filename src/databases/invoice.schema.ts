import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ERoles } from './user.enum';

export type InvoiceDocument = Invoice & Document;

@Schema({
  toJSON: {
    virtuals: true,
    transform: (_, converted) => {
      delete converted._id;
    },
  },
  toObject: {
    getters: true,
  },
  versionKey: false,
  timestamps: true,
  minimize: false,
})
export class Invoice {
  @Prop({ type: Date, required: true })
  dateImport: Date;

  @Prop({ type: String, required: true })
  customerName: string;

  @Prop({ type: String, required: true })
  productName: string;

  // Loại (1 (A) , 2 (B) , 3 (C) , 4 (D))
  @Prop({ type: String, required: true })
  type: string;

  //Quy cách hộp
  @Prop({ type: Number, required: true })
  weightWrapper: number;

  //Tổng số lượng hộp
  @Prop({ type: Number, required: true })
  amountBox: number;

  // Trọng lượng bao bì/hộp (gram)
  @Prop({ type: Number, required: true })
  weightBoxAndPackage: number;

  @Prop({ type: Number, default: 0 })
  weightCancelSG: number;

  @Prop({ type: String, default: '' })
  reasonCancelSG: string;

  @Prop({ type: Number, default: 0 })
  weightCancelDL: number;

  @Prop({ type: String, default: '' })
  reasonCancelDL: string;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
