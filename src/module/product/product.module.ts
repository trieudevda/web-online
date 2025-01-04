import { Module } from '@nestjs/common';
import { ProductService } from './service/product.service';
import { ProductController } from './controller/product.controller';
import { ProductDetailModule } from './product-detail/product-detail.module';

@Module({
    providers: [ProductService],
    controllers: [ProductController],
    imports: [ProductDetailModule],
})
export class ProductModule {}
