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
exports.updateBooks = void 0;
const books_1 = require("../data/books");
const updateBooks = (id, updatedBook) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("what was received in update books \n", id, updatedBook);
    const bookList = yield (0, books_1.getBooks)();
    const updatedBookList = bookList.map((book) => {
        if (book.id === id) {
            return Object.assign(Object.assign({}, book), { author: updatedBook.author, title: updatedBook.title });
        }
        return book;
    });
    const updatedBooks = yield (0, books_1.modifyBooks)(updatedBookList);
    return updatedBooks;
});
exports.updateBooks = updateBooks;
