import { Module } from '@nestjs/common';
import { Service } from './service/service';
import { ControllerController } from './controller/controller.controller';

@Module({
  providers: [Service],
  controllers: [ControllerController]
})
export class SupplierModule {}
