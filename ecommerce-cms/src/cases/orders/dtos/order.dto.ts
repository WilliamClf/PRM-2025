import type { CustomerDTO } from "@/cases/customers/dto/customer.dto";
import type { ProductDTO } from "@/cases/products/dtos/produtct.dto";

export interface OrderItemDTO {
    id?: string;
    product: ProductDTO;
    quantity: number;
    value: number;
}

export interface OrderDTO {
    id?: string;
    custormer: CustomerDTO;
    status: string;
    total: number;
    items: OrderItemDTO[];
    createdAt: Date;
    updatedAt: Date;
}