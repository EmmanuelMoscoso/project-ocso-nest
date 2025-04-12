import { ArrayNotEmpty, IsArray, IsObject, IsOptional, IsString, IsUUID, MaxLength} from "class-validator";
import { Location } from "../entities/location.entity";
import { Region } from "src/regions/entities/region.entity";


export class CreateLocationDto extends Location{
@IsString()
@MaxLength(50)
locationName: string = '';
@IsString()
@MaxLength(160)
locationAddress: string = '';
@IsArray()
@ArrayNotEmpty()
LocationLatLng: number[] = [];
@IsObject()
@IsOptional()
region: Region = new Region();
@IsUUID()
@IsOptional() 
manager: string = '';
}   
