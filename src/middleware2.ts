import express from 'express';

const middleware2 = (req: express.Request, res: express.Response) => {
  const baz: string = req?.baz || 'NO BAZ';
  res.send({
    baz: 'middleware2 was here! '.concat(baz),
    headers: res.getHeaders()
  });
};

export default middleware2;
