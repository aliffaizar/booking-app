import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AuthLoginDto } from './dto/auth-login.dto';
import { LocalAuthGuard } from './auth-local.guard';
import { JwtAuthGuard } from './auth-jwt.guard';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() authLoginDto: AuthLoginDto) {
    try {
      return this.authService.login(authLoginDto);
    } catch (error) {
      throw new BadRequestException('Invalid credentials');
    }
  }

  @Post('register')
  async register(@Body() authRegisterDto: AuthRegisterDto) {
    const { email, password, name } = authRegisterDto;
    try {
      return await this.authService.register({ email, password, name });
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Email already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getProfile(@Request() req) {
    return req.user;
  }
}
