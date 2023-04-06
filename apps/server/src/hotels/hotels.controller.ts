import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('hotels')
@Controller('api/hotels')
export class HotelsController {
  @Get()
  findAll() {
    return 'This action returns all hotels';
  }

  @Post()
  create() {
    return 'This action adds a new hotel';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} hotel`;
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `This action updates a #${id} hotel`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} hotel`;
  }
}
