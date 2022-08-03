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
exports.addBookRouter = void 0;
//this router will send the updated array with the newly added book object
//need the right controller which will handle the logic
const express_1 = require("express");
const addBook_1 = require("../controllers/addBook");
const createRandomId_1 = require("../controllers/createRandomId");
const addBookRouter = (0, express_1.Router)();
exports.addBookRouter = addBookRouter;
addBookRouter.post(`/book`, (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("add book router was hit!!!");
    console.log(req.body);
    const { title, author } = req.body;
    const newBook = { title, author, id: (0, createRandomId_1.createRandomId)() };
    const updatedBooks = (0, addBook_1.addBook)(newBook);
    resp.send(updatedBooks);
}));
