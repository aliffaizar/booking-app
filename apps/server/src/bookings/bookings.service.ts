import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Booking, BookingDocument } from './bookings.schema';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBoookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingsService {
  constructor(
    @InjectModel(Booking.name)
    private readonly bookingModel: Model<BookingDocument>,
  ) {}

  async findAll() {
    return await this.bookingModel.find();
  }

  async create(createBookingDto: CreateBookingDto) {
    return await this.bookingModel.create(createBookingDto);
  }

  async findById(id: string) {
    const booking = await this.bookingModel.findById(id);
    if (!booking) throw new NotFoundException(`Booking ${id} not found`);
    return booking;
  }

  async update(id: string, updateDto: UpdateBoookingDto) {
    const booking = await this.bookingModel.findByIdAndUpdate(id, updateDto, {
      new: true,
    });
    if (!booking) throw new NotFoundException(`Booking ${id} not found`);
    return booking;
  }

  async delete(id: string) {
    const booking = await this.bookingModel.findByIdAndDelete(id);
    if (!booking) throw new NotFoundException(`Booking ${id} not found`);
    return { message: `Booking ${id} deleted` };
  }
}
