"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sortNumber = (a, b) => b - a;
exports.sortNumber = sortNumber;
const sortWord = (a, b) => a.localeCompare(b);
exports.sortWord = sortWord;
