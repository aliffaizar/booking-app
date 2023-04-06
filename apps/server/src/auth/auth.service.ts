import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { compare } from 'bcrypt';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';

import { User, UserDocument } from 'src/users/user.schema';
import { AuthRegisterDto } from './dto/auth-register.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,

    private readonly jwtService: JwtService,
  ) {}

  async login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<object> {
    const user = await this.userModel.findOne({ email });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isMatch = await this.comparePassword(password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    return { accesToken: this.jwtService.sign({ id: user.id }) };
  }

  async register(AuthRegisterDto: AuthRegisterDto) {
    try {
      return await this.userModel.create(AuthRegisterDto);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Email already exists');
      }
    }
  }

  async comparePassword(password: string, hashed: string): Promise<boolean> {
    return await compare(password, hashed);
  }

  async getProfile(id: string) {
    return await this.userModel.findById(id);
  }
}
