/* eslint lines-between-class-members: 0 */
/* eslint no-useless-constructor: 0 */
import express, { Request, NextFunction, Response } from 'express';
import * as bodyParser from 'body-parser';
import 'reflect-metadata';
import { Expose, plainToClass } from 'class-transformer';

const app = express();

app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));

class User {
  @Expose() id = 0;
  @Expose() name!: string;
}

const a = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body.user);
  // validate user with class-transformer
  try {
    res.locals.user = plainToClass(User, req.body.user, {
      excludeExtraneousValues: true
    });
  } catch (e) {
    next(e);
  }
  console.log(res.locals.user);
  next();
};

const b = async (_req: Request, res: Response) => {
  if (res.locals.user) {
    return res.send(`User ${res.locals.user.name} exists`);
  }
  return res.send('User does not exist');
};

app.post('/', a, b);

app.listen(3210, () => console.log('http://localhost:3210'));
