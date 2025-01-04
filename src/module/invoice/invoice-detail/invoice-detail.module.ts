import { Module } from '@nestjs/common';
import { InvoiceDetailService } from './service/service';
import { InvoiceDetailController } from './controller/controller.controller';

@Module({
    providers: [InvoiceDetailController, InvoiceDetailService],
    controllers: [InvoiceDetailController]
})
export class InvoiceDetailModule {}
