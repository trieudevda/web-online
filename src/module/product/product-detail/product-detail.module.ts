import { Module } from '@nestjs/common';
import { ProductDetailController } from './controller/controller.controller';
import { ProductDetailService } from './service/service';

@Module({
    controllers: [ProductDetailController],
    providers: [ProductDetailService]
})
export class ProductDetailModule {}
