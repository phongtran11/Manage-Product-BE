import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invoice } from 'src/databases';
import { CreateInvoiceDto, QueryListInvoiceDto } from './dto';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectModel('Invoice') private readonly invoiceModel: Model<Invoice>,
  ) {}

  async createInvoice(createInvoiceDto: CreateInvoiceDto) {
    const invoice = await this.invoiceModel.create(createInvoiceDto);

    await invoice.save();

    return invoice;
  }

  async listInvoices({ page, limit }: QueryListInvoiceDto) {
    const invoices = await this.invoiceModel.find(
      {},
      {},
      {
        limit: limit,
        skip: (page - 1) * limit,
      },
    );

    const total = await this.invoiceModel.count({});

    const totalPage = Math.ceil(total / limit);

    return {
      data: invoices,
      totalRecord: total,
      totalPage: totalPage > 1 ? totalPage : 1,
      page,
      limit,
    };
  }
}
