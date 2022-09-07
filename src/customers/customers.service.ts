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

  async createCustomer(email: string, password: string) {
    return this.customerRepository.create({ email, password });
  }

  async updateCustomer(id: number, customer: UpdateCustomerDto) {
    return this.customerRepository.update(id, customer);
  }
}
