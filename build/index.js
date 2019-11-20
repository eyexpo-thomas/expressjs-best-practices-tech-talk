"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const middleware1_1 = __importDefault(require("./middleware1"));
const middleware2_1 = __importDefault(require("./middleware2"));
const app = express_1.default();
const router = express_1.default.Router();
app.use(router);
app.use(helmet_1.default()); // Ensure you use helmet _before_ the router!
router.get('/test-router', middleware1_1.default, middleware2_1.default);
app.get('/test-app', middleware1_1.default, middleware2_1.default);
app.listen(8080, () => console.log('http://localhost:8080'));
