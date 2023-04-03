import { PickType } from '@nestjs/mapped-types';
import { AuthRegisterDto } from './auth-register.dto';

export class AuthLoginDto extends PickType(AuthRegisterDto, [
  'email',
  'password',
] as const) {}
