import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Hotel, HotelDocument } from './hotels.schema';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel(Hotel.name) private readonly hotelModel: Model<HotelDocument>,
  ) {}

  async getHotels() {
    return this.hotelModel.find().exec();
  }

  async createHotel(createDto: CreateDto) {
    return await this.hotelModel.create(createDto);
  }

  async getHotelById(id: string) {
    const hotel = await this.hotelModel.findById(id);
    if (!hotel) throw new NotFoundException(`Hotel with id: ${id} not found`);
    return hotel;
  }

  async updateHotel(id: string, updateDto: UpdateDto) {
    const hotel = await this.hotelModel.findByIdAndUpdate(id, updateDto, {
      new: true,
    });
    if (!hotel) throw new NotFoundException(`Hotel with id: ${id} not found`);
    return hotel;
  }

  async deleteHotel(id: string) {
    const hotel = await this.hotelModel.findByIdAndDelete(id);
    if (!hotel) throw new NotFoundException(`Hotel with id: ${id} not found`);
    return { message: 'Hotel deleted successfully' };
  }
}
