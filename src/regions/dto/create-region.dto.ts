import { IsString, MaxLength, IsArray} from "class-validator";
import { Region } from "../entities/region.entity";

export class CreateRegionDto extends Region{
    @IsString()
    @MaxLength(100)
    regionsName: string;
    @IsArray()
    regionsStates: string;


}
