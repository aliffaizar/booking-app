import {
  IsArray,
  IsObject,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

type Location = {
  address: string;
  city: string;
  state: string;
  country: string;
};

export class CreateDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsPhoneNumber('ID')
  phone: string;

  @IsObject({ each: true })
  location: Location;

  @IsOptional()
  @IsArray()
  amenities: string[];
}
