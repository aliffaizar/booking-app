import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookingDocument = HydratedDocument<Booking>;

@Schema({
  timestamps: true,
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
export class Booking {
  @Prop()
  userId: string;

  @Prop()
  roomId: string;

  @Prop()
  checkIn: Date;

  @Prop()
  checkOut: Date;

  @Prop()
  price: number;

  @Prop({
    type: String,
    enum: ['pending', 'paid', 'cancelled'],
    default: 'pending',
  })
  status: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
