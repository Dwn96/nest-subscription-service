import { Injectable } from '@nestjs/common';
import { CustomersService } from '../customers/customers.service';
import { CreateCustomerDto } from '../customers/dto/create-customer.dto';
import * as bcrypt from 'bcrypt';
import { ValidateUserDTO } from './dto/validate-user-dto';

@Injectable()
export class AuthService {
  constructor(private customerService: CustomersService) {}

  async validateUser(
    payload: ValidateUserDTO,
  ): Promise<Omit<CreateCustomerDto, 'password'>> {
    const { email, password } = payload;

    const user = await this.customerService.getCustomerByMail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...rest } = user;
      return rest;
    }

    return null;
  }
}
