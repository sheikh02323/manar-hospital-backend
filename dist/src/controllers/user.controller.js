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
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
class UserController {
    static getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield user_service_1.UserService.getAllUsers();
                res.status(200).json(users);
            }
            catch (error) {
                // Cast 'error' to 'Error' type
                const err = error;
                res.status(500).json({ error: err.message });
            }
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_service_1.UserService.createUser(req.body);
                res.status(201).json(user);
            }
            catch (error) {
                // Cast 'error' to 'Error' type
                const err = error;
                res.status(500).json({ error: err.message });
            }
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_service_1.UserService.updateUser(Number(req.params.id), req.body);
                res.status(200).json(user);
            }
            catch (error) {
                const err = error;
                res.status(500).json({ error: err.message });
            }
        });
    }
}
exports.UserController = UserController;
