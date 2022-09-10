import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    abortOnError: false,
  });

  app.use(
    session({
      secret: process.env.JWT_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 36000 },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(process.env.APP_PORT);
}
bootstrap();
