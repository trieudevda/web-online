import { Module } from '@nestjs/common';
import { InvoiceDetailModule } from './invoice-detail/invoice-detail.module';
import { InvoiceController } from './controller/controller.controller';
import { InvoiceService } from './service/service';

@Module({
    imports: [InvoiceDetailModule],
    controllers: [InvoiceController],
    providers: [InvoiceService],
})
export class InvoiceModule {}
