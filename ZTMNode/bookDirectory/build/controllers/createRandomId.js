"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRandomId = void 0;
const createRandomId = () => {
    const randomId = Math.floor(Math.random() * 100000);
    return randomId;
};
exports.createRandomId = createRandomId;
