import express, { Request, NextFunction, Response } from 'express';
import * as bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));

type User = { name: string; id: number };

const a = async (req: Request, res: Response, next: NextFunction) => {
  // validate user
  if (
    typeof req.body?.user?.id !== 'number' ||
    typeof req.body?.user?.name !== 'string'
  ) {
    next(Error('INVALID_USER'));
  }
  res.locals.user = req.body?.user as User;
  next();
};

const b = async (_req: Request, res: Response) => {
  if (res.locals.user) {
    return res.send(`User ${res.locals.user.name} exists`);
  }
  return res.send(`User does not exist`);
};

app.post('/', a, b);

app.listen(3210, () => console.log('http://localhost:3210'));
