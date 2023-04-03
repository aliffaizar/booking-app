import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { UsersService } from 'src/users/users.service';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { User, UserDocument } from 'src/users/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<object> {
    const user = await this.validateUser(email, password);

    if (user) {
      return { accesToken: this.jwtService.sign({ id: user.id }) };
    }
  }

  async register(AuthRegisterDto: AuthRegisterDto) {
    return await this.userModel.create(AuthRegisterDto);
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (user && (await this.comparePassword(password, user.password))) {
      return user;
    }
    return null;
  }

  async comparePassword(password: string, hashed: string): Promise<boolean> {
    return await compare(password, hashed);
  }
}
