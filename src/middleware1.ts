import express from 'express';

/** Sets req.baz */
const middleware1 = (
  req: express.Request,
  _res: express.Response,
  next: express.NextFunction
) => {
  req.baz = 'middleware1 was here';
  next();
};

export default middleware1;
