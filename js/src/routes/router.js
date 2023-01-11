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
exports.__esModule = true;
exports.router = void 0;
var express = require("express");
var db_services_1 = require("../services/db.services");
var uuid_1 = require("uuid");
// import cors from 'cors';
var cors = require("cors");
exports.router = express.Router();
var allowedOrigins = ['http://localhost:3000'];
var options = {
    origin: allowedOrigins
};
exports.router.use(express.json());
exports.router.use(cors(options));
exports.router.get('/', function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var puppies, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ((_a = db_services_1.collections.puppies) === null || _a === void 0 ? void 0 : _a.find({}).toArray())];
            case 1:
                puppies = _b.sent();
                res.status(200).send(puppies);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                res.status(500).send(error_1.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.router.get('/:id', function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, puppy, error_2;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = _req.params.id;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, ((_a = db_services_1.collections.puppies) === null || _a === void 0 ? void 0 : _a.findOne({ id: id }))];
            case 2:
                puppy = _b.sent();
                res.status(200).send(puppy);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                res.status(500).send(error_2.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.router.post('/', function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newPuppy, result, error_3;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                newPuppy = _req.body;
                newPuppy.id = (0, uuid_1.v4)();
                return [4 /*yield*/, ((_a = db_services_1.collections.puppies) === null || _a === void 0 ? void 0 : _a.insertOne(newPuppy))];
            case 1:
                result = _b.sent();
                result
                    ? res.status(201).send("Successfully created with id ".concat(result.insertedId))
                    : res.status(500).send("Failed to create a new puppy.");
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                console.error(error_3);
                res.status(400).send(error_3.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.router.put("/:id", function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, updatedPuppy, result, error_4;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = _req.params.id;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                updatedPuppy = _req.body;
                return [4 /*yield*/, ((_a = db_services_1.collections.puppies) === null || _a === void 0 ? void 0 : _a.updateOne({ id: id }, { $set: updatedPuppy }))];
            case 2:
                result = _b.sent();
                if (result && result.upsertedId) {
                    res.status(200).send("Successfully updated Puppy with id ".concat(id));
                }
                else {
                    res.status(304).send("Puppy with id: ".concat(id, " not updated"));
                }
                return [3 /*break*/, 4];
            case 3:
                error_4 = _b.sent();
                console.error(error_4.message);
                res.status(400).send(error_4.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.router["delete"]("/:id", function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_5;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = _req.params.id;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, ((_a = db_services_1.collections.puppies) === null || _a === void 0 ? void 0 : _a.deleteOne({ id: id }))];
            case 2:
                result = _b.sent();
                if (result && result.deletedCount) {
                    res.status(202).send("Successfully removed puppy with id ".concat(id));
                }
                else if (!result) {
                    res.status(400).send("Failed to remove puppy with id ".concat(id));
                }
                else if (!result.deletedCount) {
                    res.status(404).send("Puppy with id ".concat(id, " does not exist"));
                }
                return [3 /*break*/, 4];
            case 3:
                error_5 = _b.sent();
                console.error(error_5.message);
                res.status(400).send(error_5.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
