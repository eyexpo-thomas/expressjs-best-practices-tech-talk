"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const middleware_1 = require("./middleware");
const app = express_1.default();
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));
app.all('/', middleware_1.saveRequestToTape, middleware_1.loginWithEmailAndPassword);
app.listen(3210, () => console.log('http://localhost:3210'));
