import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users,module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'your_secret_key', // Replace with a strong secret
      signOptions: { expiresIn: '60s' }, // Token expiration time
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
