"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Sets req.baz */
const middleware1 = (req, _res, next) => {
    req.baz = 'middleware1 was here';
    next();
};
exports.default = middleware1;
