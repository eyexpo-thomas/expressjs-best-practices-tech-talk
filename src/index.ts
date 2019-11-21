import express from 'express';
import helmet from 'helmet';
import { middleware1, middleware2 } from './middleware';

const app = express();
const router = express.Router();

app.use(router);
app.use(helmet()); // Mistake! Helmet needs to run before the router

router.get('/', middleware1, middleware2);

app.listen(3210, () => console.log('http://localhost:3210'));
