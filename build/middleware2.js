"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const middleware2 = (req, res) => {
    var _a;
    const baz = ((_a = req) === null || _a === void 0 ? void 0 : _a.baz) || 'NO BAZ';
    res.send({
        baz: 'middleware2 was here! '.concat(baz),
        headers: res.getHeaders()
    });
};
exports.default = middleware2;
