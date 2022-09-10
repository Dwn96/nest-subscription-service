import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ProtectedGuard } from '../auth/protected.guard';
import { EntityNotFoundError } from 'typeorm';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {}

  @UseGuards(ProtectedGuard)
  @Get()
  getCustomers() {
    return this.customerService.getAllCustomers();
  }
  @UseGuards(ProtectedGuard)
  @Get(':id')
  getCustomerById(@Param('id') id: string) {
    return this.customerService.getCustomerById(Number(id)).catch((err) => {
      if (err instanceof EntityNotFoundError)
        throw new NotFoundException('Customer Not Found');
    });
  }
  @UseGuards(ProtectedGuard)
  @Post()
  async createCustomer(@Body() customer: CreateCustomerDto) {
    return this.customerService.createCustomer(
      customer.email,
      customer.password,
    );
  }
}
