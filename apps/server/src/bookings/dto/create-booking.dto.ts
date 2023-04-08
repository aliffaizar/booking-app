import { IsMongoId, IsNumber, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsMongoId()
  roomId: string;

  @IsMongoId()
  userId: string;

  @IsString()
  checkIn: Date;

  @IsString()
  checkOut: Date;

  @IsNumber()
  price: number;
}
