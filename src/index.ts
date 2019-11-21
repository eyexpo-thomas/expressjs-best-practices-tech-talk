import express from 'express';
import * as bodyParser from 'body-parser';
import { saveRequestToTape, loginWithEmailAndPassword } from './middleware';

const app = express();
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));

app.all('/', saveRequestToTape, loginWithEmailAndPassword);

app.listen(3210, () => console.log('http://localhost:3210'));
