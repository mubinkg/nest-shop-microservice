import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { PRODUCTS_PACKAGE_NAME, PRODUCTS_SERVICE_NAME, ProductsServiceClient } from "types/proto/products"

@Controller('products')
export class ProductsController implements OnModuleInit {
    private productService: ProductsServiceClient;
    constructor(
        @Inject(PRODUCTS_PACKAGE_NAME) private readonly client: ClientGrpc
    ) { }

    onModuleInit() {
        this.productService = this.client.getService<ProductsServiceClient>(PRODUCTS_SERVICE_NAME);
    }

    @Get()
    async getProducts() {
        return this.productService.getProduct({ productId: 1 });
    }
}
