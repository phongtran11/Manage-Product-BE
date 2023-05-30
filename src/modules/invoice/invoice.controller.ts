import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto, QueryListInvoiceDto } from './dto';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post('create')
  async createInvoice(@Body() createInvoiceDto: CreateInvoiceDto) {
    const invoice = await this.invoiceService.createInvoice(createInvoiceDto);

    return invoice;
  }

  @Get('list')
  async getListInvoice(@Query() query: QueryListInvoiceDto) {
    const list = await this.invoiceService.listInvoices(query);
    return list;
  }
}
