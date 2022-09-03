import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Customer from './customers.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  getAllCustomers() {
    return this.customerRepository.find();
  }

  getCustomerById(id: number) {
    return this.customerRepository.findOneOrFail({
      where: { id },
    });
  }
}
