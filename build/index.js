"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
/* eslint lines-between-class-members: 0 */
/* eslint no-useless-constructor: 0 */
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
require("reflect-metadata");
const class_transformer_1 = require("class-transformer");
const app = express_1.default();
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));
class User {
    constructor() {
        this.id = 0;
    }
}
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Object)
], User.prototype, "id", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
const a = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body.user);
    // validate user with class-transformer
    try {
        res.locals.user = class_transformer_1.plainToClass(User, req.body.user, {
            excludeExtraneousValues: true
        });
    }
    catch (e) {
        next(e);
    }
    console.log(res.locals.user);
    next();
});
const b = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (res.locals.user) {
        return res.send(`User ${res.locals.user.name} exists`);
    }
    return res.send('User does not exist');
});
app.post('/', a, b);
app.listen(3210, () => console.log('http://localhost:3210'));
