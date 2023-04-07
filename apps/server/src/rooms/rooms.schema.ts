import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

import { Hotel } from '../hotels/hotels.schema';

export type RoomDocument = HydratedDocument<Room>;

@Schema({
  versionKey: false,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      return ret;
    },
  },
})
export class Room {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' })
  hotel: Hotel;

  @Prop()
  type: string;

  @Prop()
  price: number;

  @Prop()
  capacity: number;

  @Prop()
  description: string;

  @Prop()
  images: string[];

  @Prop()
  amenities: string[];
}

export const RoomSchema = SchemaFactory.createForClass(Room);
