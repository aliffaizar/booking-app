import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  hotel: string;

  @IsString()
  type: string;

  @IsNumber()
  price: number;

  @IsNumber()
  capacity: number;

  @IsString()
  description: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsOptional()
  @IsArray()
  amenities: string[];
}
