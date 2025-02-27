import { IsInt, IsNumber, IsOptional, IsString, IsUUID, Max, MaxLength } from "class-validator";

export class CreateProductDto {
@IsUUID("4")
@IsString()
@IsOptional()
productId: string;
@IsString()
@MaxLength(50)
productName: string;
@IsNumber()
price: number;
@IsInt()
countSeal: number;
@IsUUID("4")
@IsString()
@IsOptional()
provider: string;
}