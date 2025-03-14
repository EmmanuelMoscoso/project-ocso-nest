import { IsEmail, IsString, MaxLength, IsNumber, IsObject, IsOptional} from "class-validator";
import { Manager } from "../entities/manager.entity";
import { Location } from "src/locations/entities/location.entity";

export class CreateManagerDto extends Manager{
    @IsString()
    @MaxLength(80)
    managerFullName: string = '';
    @IsString()
    @IsEmail()
    managerEmail: string = '';
    @IsNumber()
    managerSalary: number = 0;
    @IsString()
    @MaxLength(16)
    managerPhoneNumber = '';
    @IsObject()
    @IsOptional()
    location: Location = new Location();


}



