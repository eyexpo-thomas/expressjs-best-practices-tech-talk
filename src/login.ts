import { Request, Response } from 'express';

const loginWithEmailAndPassword = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const credentials = {
    email,
    password,
    ip: req.connection.remoteAddress
  };
  if (email === 'thomas.mc@eyexpo.com' && password === 'letmein!') {
    return res.send({ login: 'success' });
  }
  // Bad: Don't log user data to the console!
  console.log(
    'loginWithEmailAndPassword: Login failed with credentials:',
    credentials
  );
  // Bad: Don't send a plaintext password back to the user!
  return res.send({
    credentials,
    login: 'failed'
  });
};

export default loginWithEmailAndPassword;
