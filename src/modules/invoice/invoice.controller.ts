import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import {
  CreateInvoiceDto,
  PatchInvoiceDto,
  QueryDetailInvoiceDto,
  QueryInvoicesResponseDto,
  QueryListInvoiceDto,
} from './dto';
import { plainToInstance } from 'class-transformer';
import { Types } from 'mongoose';

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

  @Get('detail')
  async getDetailInvoice(
    @Query() queryDetailInvoiceDto: QueryDetailInvoiceDto,
  ) {
    const invoice = await this.invoiceService.getDetailInvoice(
      queryDetailInvoiceDto,
    );

    return plainToInstance(QueryInvoicesResponseDto, invoice);
  }

  @Patch('update/:id')
  async updateInvoice(
    @Param('id') id: string,
    @Body() patchInvoiceDto: PatchInvoiceDto,
  ) {
    const objectId = new Types.ObjectId(id);
    return await this.invoiceService.updateInvoice(objectId, patchInvoiceDto);
  }
}
