import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt/jwt.strategy';

import authConfig from '../../config/auth.config';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forFeature(authConfig),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [JwtStrategy, JwtAuthGuard, AuthService, PrismaService],
  exports: [PassportModule, JwtStrategy, JwtAuthGuard, AuthService],
})
export class AuthModule { }