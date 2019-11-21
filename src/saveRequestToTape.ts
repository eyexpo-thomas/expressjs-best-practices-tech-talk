import { NextFunction, Request, Response } from 'express';
import * as fs from 'fs';
import uuid from 'uuid';
import * as util from 'util';

const saveRequestToTape = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const request = util.inspect(req);
  await fs.promises.mkdir('./logs', { recursive: true });
  const path = `./logs/request_${Date.now()}_${uuid()}.txt`;
  // Bad: Don't write logs to the disk without
  // getting rid of sensitive data first!
  fs.promises.writeFile(path, request);
  console.log(`saveRequestToTape: Saving log to disk: ${path}`);

  next();
};

export default saveRequestToTape;
