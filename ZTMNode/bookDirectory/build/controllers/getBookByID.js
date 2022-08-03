"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookById = void 0;
const getBookById = (id, arr) => {
    return arr.filter((book) => {
        if (book.id === id) {
            return book;
        }
    });
};
exports.getBookById = getBookById;
