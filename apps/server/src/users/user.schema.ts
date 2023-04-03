import * as bcrypt from 'bcrypt';
import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({
  versionKey: false,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret.password;
      delete ret._id;
      return ret;
    },
  },
})
export class User {
  @Prop({ required: true })
  name: string;

  @Prop(raw({ type: String, unique: true }))
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: String, enum: ['admin', 'user'], default: 'user' })
  role: string;

  @Prop({ type: String, default: null })
  avatar: string;

  @Prop({ type: Boolean, default: false })
  verified: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();
  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});
