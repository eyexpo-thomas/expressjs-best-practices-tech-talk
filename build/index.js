"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const middleware_1 = require("./middleware");
const app = express_1.default();
const router = express_1.default.Router();
app.use(helmet_1.default());
app.use(router);
// Headers won't include x-powered-by
router.get('/', middleware_1.middleware1, middleware_1.middleware2);
app.listen(3210, () => console.log('http://localhost:3210'));
