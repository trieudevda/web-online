import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './module/users/users.module';
import { ProductModule } from './module/product/product.module';
import { ProductService } from './module/product/service/product.service';
import { InvoiceModule } from './module/invoice/invoice.module';
import { SupplierModule } from './module/supplier/supplier.module';

@Module({
    imports: [UsersModule, ProductModule, InvoiceModule, SupplierModule],
    controllers: [AppController],
    providers: [AppService, ProductService],
})
export class AppModule {}
