import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CustomersService } from 'src/customers/customers.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly customerService: CustomersService,
  ) {}

  async signin ()
}
