import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Room, RoomDocument } from './rooms.schema';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomsService {
  constructor(
    @InjectModel(Room.name) private readonly roomModel: Model<RoomDocument>,
  ) {}

  async findAll() {
    return await this.roomModel.find();
  }

  async create(createRoomDto: CreateRoomDto) {
    return await this.roomModel.create(createRoomDto);
  }

  async findById(id: string) {
    const room = await this.roomModel.findById(id);
    if (!room) throw new NotFoundException(`Room ${id} not found`);
    return room;
  }

  async update(id: string, updateDto: UpdateRoomDto) {
    const room = await this.roomModel.findByIdAndUpdate(id, updateDto, {
      new: true,
    });
    if (!room) throw new NotFoundException(`Room ${id} not found`);
    return room;
  }

  async delete(id: string) {
    const room = await this.roomModel.findByIdAndDelete(id);
    if (!room) throw new NotFoundException(`Room ${id} not found`);
    return { message: `Room ${id} deleted` };
  }
}
