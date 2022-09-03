import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CustomersController } from './customers/customers.controller';
import { CustomersService } from './customers/customers.service';
import * as Joi from 'joi';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    validationSchema: Joi.object({
      APP_PORT: Joi.number().required(),
      POSTGRES_HOST: Joi.string().required(),
      POSTGRES_PORT: Joi.number().required(),
      POSTGRES_USER: Joi.string().required(),
      POSTGRES_PASSWORD: Joi.string().required().allow(null,''),
      POSTGRES_DB: Joi.string().required(),
    })
  })],
  controllers: [AppController, CustomersController],
  providers: [AppService, CustomersService],
})
export class AppModule {}
