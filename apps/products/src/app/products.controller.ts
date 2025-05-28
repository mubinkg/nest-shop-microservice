import { Controller } from '@nestjs/common';
import { ProductRequest, ProductResponse, ProductsServiceController, ProductsServiceControllerMethods } from '../../../../types/proto/products';
import { Observable } from 'rxjs';

@Controller('product')
@ProductsServiceControllerMethods()
export class ProductsController implements ProductsServiceController {
    getProduct(request: ProductRequest): Promise<ProductResponse> | Observable<ProductResponse> | ProductResponse {
        console.log(request)
        return {
            productId: 1,
            name: "Product 1",
            price: 100
        }
    }
}
