import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('rooms')
@Controller('api/rooms')
export class RoomsController {
  @Get()
  findAll() {
    return 'This action returns all rooms';
  }
  @Post()
  create() {
    return 'This action adds a new room';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} room`;
  }
  @Patch(':id')
  update(@Param('id') id: string) {
    return `This action updates a #${id} room`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} room`;
  }
}
