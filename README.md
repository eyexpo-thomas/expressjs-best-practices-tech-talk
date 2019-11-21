#### Middleware order

This example shows the consequences of calling middleware out-of-order.

`helmet` is a security middleware. One of it's functions is to hide the `X-powered-by: 'Express'` default header. This means that when someone discoveres a zero-day exploit for Express/NodeJS, they won't discover that our server is vulnerable by simply looking at the headers.

When helmet included _after_ the router is used, it runs after our middleware, and never works!

To fix this, we need to use `helmet` first.

```javascript
// good
const router = express.Router();
app.use(helmet());
app.use(router);
```

```javascript
// bad
const router = express.Router();
app.use(router);
app.use(helmet());
```
