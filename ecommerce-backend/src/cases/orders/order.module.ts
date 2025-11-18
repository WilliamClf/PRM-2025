import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "./entities/order.entity";
import { CustomerModule } from "../customers/customer.module";
import { OrderItem } from "./entities/order-item.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Order, OrderItem]),
    CustomerModule],
    providers: [OrderService],
    controllers: [OrderController]
})
export class OrderModule {}