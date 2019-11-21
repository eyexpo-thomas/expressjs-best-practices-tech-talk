import express from 'express';
import helmet from 'helmet';
import middleware1 from './middleware1';
import middleware2 from './middleware2';

const app = express();
const router = express.Router();

app.use(router);
app.use(helmet()); // Mistake! Helmet needs to run before the router

router.get('/test-router', middleware1, middleware2);
app.get('/test-app', middleware1, middleware2);

app.listen(8080, () => console.log('http://localhost:8080'));
