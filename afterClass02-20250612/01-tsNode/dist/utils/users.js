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
exports.getPokemon = exports.getUser = void 0;
const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
    return {
        id: 10,
        nombre: "Luciana",
        email: "luciana@test.com",
        password: "123",
        rol: "user"
    };
});
exports.getUser = getUser;
const getPokemon = () => {
    let personaje01;
    // personaje01={}
    // personaje01.abilities[0].is_hidden=false
};
exports.getPokemon = getPokemon;
