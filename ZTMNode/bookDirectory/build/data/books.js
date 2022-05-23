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
exports.modifyBooks = exports.getBooks = void 0;
const book1 = { author: "Leo Tolstoy", title: "Anna Karenina ", id: 1 };
const book2 = {
    author: "Gustave Flaubert",
    title: "Madame Bovary",
    id: 2,
};
const book3 = { author: "Leo Tolstoy", title: "War and Peace", id: 3 };
let bookDirectory = [book1, book2, book3];
const getBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const getBooksPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(bookDirectory);
        }, 1000);
    });
    return getBooksPromise;
});
exports.getBooks = getBooks;
const modifyBooks = (arr) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Array of books received in modify books \n`, arr);
    const getBooksPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve((bookDirectory = arr));
        }, 1000);
    });
    return getBooksPromise;
});
exports.modifyBooks = modifyBooks;
