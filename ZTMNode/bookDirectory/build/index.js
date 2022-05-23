"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getBookByIdRouter_1 = require("./routes/getBookByIdRouter");
const deleteBookByIdRouter_1 = require("./routes/deleteBookByIdRouter");
const getAllBooksRouter_1 = require("./routes/getAllBooksRouter");
const addBookRouter_1 = require("./routes/addBookRouter");
const updateBooksRouter_1 = require("./routes/updateBooksRouter");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use(updateBooksRouter_1.updateBooksRouter);
app.use(addBookRouter_1.addBookRouter);
app.use(getAllBooksRouter_1.getAllBooksRouter);
app.use(deleteBookByIdRouter_1.deleteRouter);
app.use(getBookByIdRouter_1.router);
app.listen(3000, () => {
    console.log("book depository server running on port 3000");
});
