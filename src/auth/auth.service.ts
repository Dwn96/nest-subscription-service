import { Injectable } from '@nestjs/common';
import { CustomersService } from '../customers/customers.service';
import { CreateCustomerDto } from '../customers/dto/create-customer.dto';

@Injectable()
export class AuthService {
  constructor(private customerService: CustomersService) {}

  async validateUser(
    id: number,
    password: string,
  ): Promise<Omit<CreateCustomerDto, 'password'>> {
    const user = await this.customerService.getCustomerById(id);

    if (user && user.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...rest } = user;
      return rest;
    }

    return null;
  }
}
