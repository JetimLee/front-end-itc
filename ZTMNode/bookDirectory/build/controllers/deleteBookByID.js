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
exports.deleteBookById = void 0;
const books_1 = require("../data/books");
//returns the updated books array
const deleteBookById = (id, arr) => __awaiter(void 0, void 0, void 0, function* () {
    const newBookList = arr.filter((book) => {
        if (book.id !== id) {
            return book;
        }
    });
    console.log(newBookList, "new books after deletion");
    const updatedBooks = yield (0, books_1.modifyBooks)(newBookList);
    return updatedBooks;
});
exports.deleteBookById = deleteBookById;
