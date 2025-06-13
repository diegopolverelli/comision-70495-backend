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
const users_1 = require("../utils/users");
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let usuario = yield (0, users_1.getUser)();
    let usuarios = [
        { id: 1, nombre: "Luciana", email: "luciana@test.com", password: "123", rol: "user" },
        { id: 2, nombre: "Juan", email: "juan@test.com", password: "123", rol: "user" },
        { id: 3, nombre: "Romina", email: "romina@test.com", password: "123", rol: "admin" },
    ];
    usuarios.push(usuario);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(usuarios);
}));
