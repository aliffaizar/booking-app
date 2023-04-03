import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from 'src/users/users.module';
import { UserSchema } from 'src/users/user.schema';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './auth-local.strategy';
import { JwtStrategy } from './auth-jwt.strategy';
import { jwtConfig } from 'src/config/jwt.config';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync(jwtConfig),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
})
export class AuthModule {}
