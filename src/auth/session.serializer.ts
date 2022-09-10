import { PassportSerializer } from '@nestjs/passport';
import { PassportStatic } from 'passport';

export class SessionSerializer extends PassportSerializer {
  deserializeUser(user: any, done: (err: Error, user: any) => void) {
    done(null, user);
  }
  serializeUser(user: any, done: (err: Error, user: any) => void) {
    done(null, user);
  }
}
