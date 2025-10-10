import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { CategoryModule } from "../categories/category.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Product]),
        CategoryModule
    ],
    providers: [CategoryModule, ProductService],
    controllers: [ProductController]
})
export class ProductModule {}