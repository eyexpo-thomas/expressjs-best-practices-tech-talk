"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const uuid_1 = __importDefault(require("uuid"));
const util = __importStar(require("util"));
const saveRequestToTape = (req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const request = util.inspect(req);
    yield fs.promises.mkdir('./logs', { recursive: true });
    const path = `./logs/request_${Date.now()}_${uuid_1.default()}.txt`;
    // Bad: Don't write logs to the disk without
    // getting rid of sensitive data first!
    fs.promises.writeFile(path, request);
    console.log(`saveRequestToTape: Saving log to disk: ${path}`);
    next();
});
exports.default = saveRequestToTape;
