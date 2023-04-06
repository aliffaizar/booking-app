import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { HotelsController } from './hotels.controller';
import { HotelsService } from './hotels.service';
import { HotelSchema } from './hotels.schema';

@Module({
  controllers: [HotelsController],
  providers: [HotelsService],
  imports: [
    MongooseModule.forFeature([{ name: 'Hotel', schema: HotelSchema }]),
  ],
})
export class HotelsModule {}
