import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { CustomersModule } from '../customers/customers.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [CustomersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
