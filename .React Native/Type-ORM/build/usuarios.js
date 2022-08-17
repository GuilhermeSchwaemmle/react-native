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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var datasource_1 = require("./datasource");
var User_1 = require("./entity/User");
var express = require('express');
var router = express.Router();
datasource_1.default
    .initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err);
});
router.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, datasource_1.default.getRepository(User_1.User).find()];
            case 1:
                users = _a.sent();
                res.json(users);
                return [2 /*return*/];
        }
    });
}); });
router.post("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = req.body;
                return [4 /*yield*/, datasource_1.default.getRepository(User_1.User).save(user)];
            case 1:
                result = _a.sent();
                res.send(result);
                return [2 /*return*/];
        }
    });
}); });
router.put("/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, datasource_1.default.getRepository(User_1.User).findOneBy({
                    id: +req.params.id,
                })];
            case 1:
                user = _a.sent();
                datasource_1.default.getRepository(User_1.User).merge(user, req.body);
                return [4 /*yield*/, datasource_1.default.getRepository(User_1.User).save(user)];
            case 2:
                results = _a.sent();
                return [2 /*return*/, res.send(results)];
        }
    });
}); });
router.delete("/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, datasource_1.default.getRepository(User_1.User).delete(req.params.id)];
            case 1:
                results = _a.sent();
                return [2 /*return*/, res.send(results)];
        }
    });
}); });
exports.default = router;
// import { Request, Response } from "express"
// import { DataSource } from "typeorm"
// import dataSource from "./datasource"
// import { User } from "./entity/User"
// const express = require('express')
// const router = express.Router()
// router.get("/user", async (req: Request, res: Response) => {
//     const users = await dataSource.getRepository(User).find()
//     res.json(users)
// })
// router.post('/user', async (req: Request, res: Response) => {
//     const user = req.body
//     const result = await dataSource.getRepository(User).save(user)
//     res.send(result)
// })
// router.put("/user/:id", async function (req: Request, res: Response) {
//     const user = await dataSource.getRepository(User).findOneBy({
//         id: req.params.id,
//     })
//     dataSource.getRepository(User).merge(user, req.body)
//     const results = await dataSource.getRepository(User).save(user)
//     return res.send(results)
// })
// router.delete("/user/:id", async function (req: Request, res: Response) {
//     const results = await dataSource.getRepository(User).delete(req.params.id)
//     return res.send(results)
// })
// export default router