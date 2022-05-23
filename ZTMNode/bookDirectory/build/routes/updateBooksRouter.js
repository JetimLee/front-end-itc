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
exports.updateBooksRouter = void 0;
const updateBooks_1 = require("../controllers/updateBooks");
const express_1 = require("express");
const updateBooksRouter = (0, express_1.Router)();
exports.updateBooksRouter = updateBooksRouter;
updateBooksRouter.put("/book/:id", (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, author, id } = req.body;
    //would need to check here if a number actually comes through and if not, to handle that error
    const idToNumber = parseFloat(id);
    const updatedBook = { title, author, id: idToNumber };
    const updatedBooks = yield (0, updateBooks_1.updateBooks)(idToNumber, updatedBook);
    resp.send(updatedBooks);
}));
