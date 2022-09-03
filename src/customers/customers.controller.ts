import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { EntityNotFoundError } from 'typeorm';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {}

  @Get()
  getCustomers() {
    return this.customerService.getAllCustomers();
  }

  @Get(':id')
  getCustomerById(@Param('id') id: string) {
    return this.customerService.getCustomerById(Number(id)).catch((err) => {
      if (err instanceof EntityNotFoundError)
        throw new NotFoundException('Customer Not Found');
    });
  }

  @Post()
  async createCustomer(@Body() customer: CreateCustomerDto) {
    return this.createCustomer(customer);
  }
}
