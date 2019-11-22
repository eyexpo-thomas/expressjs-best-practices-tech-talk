"use strict";
/* global BigInt */
Object.defineProperty(exports, "__esModule", { value: true });
class Calculator {
    /**
     * Add two numbers together.
     * @param a The first number to add.
     * @param b The second number to add.
     * @returns Resultant is the sum of the two inputs, a and b.
     */
    static add(a, b) {
        if (typeof a === 'bigint' && typeof b === 'bigint') {
            return a + b;
        }
        if (typeof a === 'bigint' || typeof b === 'bigint') {
            return BigInt(a) + BigInt(b);
        }
        return a + b;
    }
}
exports.default = Calculator;
