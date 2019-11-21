# User data logging

Do not log user's secrets in plain text ever!

Some possible mistakes:

`index.ts`:
```typescript
app.all('/', saveRequestToTape, loginWithEmailAndPassword);
```
`saveRequestToTape.ts`:
```typescript
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
```
`login.ts`:
```typescript
const loginWithEmailAndPassword = async (req: Request, res: Response) => {
  console.log({ body: req.body });
  const { email, password } = req.body;
  const credentials = {
    email,
    password,
    ip: req.connection.remoteAddress
  };
  if (email === 'thomas.mc@eyexpo.com' && password === 'letmein!') {
    res.send({ login: 'success' });
  } else {
    // Bad: Don't log user data to the console!
    console.log(
      `loginWithEmailAndPassword: Login failed with credentials:`,
      credentials
    );
    // Bad: Don't send a plaintext password back to the user!
    res.send({
      credentials,
      login: 'failed'
    });
  }
};
```
`request_1574380801452_42eb17cb-a805-4779-97c9-c1fa34e61ff6.txt:824`:
```
...
824    [Symbol(kOutHeaders)]: [Object: null prototype] { 'x-powered-by': [Array] }
825  },
826  body: { email: 'thomas.mc@eyexpo.co', password: 'eyexpo123' },
827  _body: true,
828  length: undefined,
...
```