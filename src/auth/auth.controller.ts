import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  UnauthorizedException,
  Headers,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Role } from '@prisma/client';
@ApiTags('auth') // This will add a "Auth" section in Swagger
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: RegisterDto }) // Explicitly defines the body type
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('users-by-role')
  async getUsersByRole(@Query('role') role: Role) {
    return this.authService.getUsersByRole(role);
  }

  @Get('me')
  async getLoggedInUser(@Headers('Authorization') authHeader: string) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Authorization header not found');
    }

    const token = authHeader.split(' ')[1]; // Extract the token
    return this.authService.getLoggedInUser(token);
  }
}
