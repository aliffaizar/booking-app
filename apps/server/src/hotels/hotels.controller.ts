import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HotelsService } from './hotels.service';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

@ApiTags('hotels')
@Controller('api/hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Get()
  async findAll() {
    return await this.hotelsService.getHotels();
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.hotelsService.createHotel(createDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.hotelsService.getHotelById(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateDto) {
    return await this.hotelsService.updateHotel(id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.hotelsService.deleteHotel(id);
  }
}
