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
Object.defineProperty(exports, "__esModule", { value: true });
const loginWithEmailAndPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const credentials = {
        email,
        password,
        ip: req.connection.remoteAddress
    };
    if (email === 'thomas.mc@eyexpo.com' && password === 'letmein!') {
        return res.send({ login: 'success' });
    }
    // Bad: Don't log user data to the console!
    console.log('loginWithEmailAndPassword: Login failed with credentials:', credentials);
    // Bad: Don't send a plaintext password back to the user!
    return res.send({
        credentials,
        login: 'failed'
    });
});
exports.default = loginWithEmailAndPassword;
