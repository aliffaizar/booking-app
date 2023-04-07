import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type HotelDocument = HydratedDocument<Hotel>;

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
export class Hotel {
  @Prop()
  name: string;

  @Prop(
    raw({
      address: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
    }),
  )
  location: Record<string, unknown>;

  @Prop()
  phone: string;

  @Prop()
  description: string;

  @Prop()
  rating: number;

  @Prop()
  image: string;

  @Prop()
  amenities: string[];
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
