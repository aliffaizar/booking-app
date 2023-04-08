import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBoookingDto } from './dto/update-booking.dto';

@Controller('api/bookings')
export class BookingsController {
  constructor(private readonly bookingService: BookingsService) {}

  @Get()
  async findAll() {
    return await this.bookingService.findAll();
  }

  @Post()
  async create(@Body() createBookingDto: CreateBookingDto) {
    return await this.bookingService.create(createBookingDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.bookingService.findById(id);
  }

  @Patch(':id')
  async update(
    @Body() updateBookingDto: UpdateBoookingDto,
    @Param('id') id: string,
  ) {
    return await this.bookingService.update(id, updateBookingDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.bookingService.delete(id);
  }
}
