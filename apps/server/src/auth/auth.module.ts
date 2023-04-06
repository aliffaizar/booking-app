import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';

import { UserSchema } from 'src/users/user.schema';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './auth-jwt.strategy';
import { jwtConfig } from 'src/config/jwt.config';

@Module({
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  imports: [
    PassportModule,
    JwtModule.registerAsync(jwtConfig),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
})
export class AuthModule {}
