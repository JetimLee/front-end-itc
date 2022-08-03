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
exports.router = void 0;
const express_1 = require("express");
const getBookByID_1 = require("../controllers/getBookByID");
const books_1 = require("../data/books");
const router = (0, express_1.Router)();
exports.router = router;
router.get(`/book/:id`, (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("router was hit!!!");
    const { id } = req.params;
    const booksArray = yield (0, books_1.getBooks)();
    const idToNumber = parseFloat(id);
    const foundBook = (0, getBookByID_1.getBookById)(idToNumber, booksArray);
    resp.send(foundBook);
}));
