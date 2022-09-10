import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Customer from './entities/customers.entity';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async getAllCustomers() {
    return this.customerRepository.find();
  }

  async getCustomerById(id: number) {
    return this.customerRepository.findOneOrFail({
      where: { id },
    });
  }

  async createCustomer(email: string, pass: string) {
    const entity = Object.assign(new Customer(), { email, password: pass });
    const { password, ...rest } = await this.customerRepository.save(entity);
    return rest;
  }

  async updateCustomer(id: number, customer: UpdateCustomerDto) {
    return this.customerRepository.update(id, customer);
  }

  async getCustomerByMail(email: string) {
    return this.customerRepository.findOne({
      where: { email },
    });
  }
}
