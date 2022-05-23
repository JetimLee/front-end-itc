"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getBookByIdRouter_1 = require("./routes/getBookByIdRouter");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use(getBookByIdRouter_1.router);
app.listen(3000, () => {
    console.log("book depository server running on port 3000");
});
