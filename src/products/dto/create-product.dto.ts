import { IsInt, IsNumber, IsObject, IsOptional, IsString, IsUUID, Max, MaxLength } from "class-validator";
import { Provider } from "src/providers/entities/provider.entity";
import { Product } from "../entities/product.entity";

export class CreateProductDto extends Product{
@IsUUID("4")
@IsString()
@IsOptional()
productId: string = '';
@IsString()
@MaxLength(50)
productName: string = '';
@IsNumber()
price: number = 0;
@IsInt()
countSeal: number = 0;
@IsObject()
provider: Provider = new Provider();
}