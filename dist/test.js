"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const app_1 = __importDefault(require("./app"));
describe('Testing api endpoint', () => {
    test('sanity check for /test', async () => {
        const res = await request(app_1.default).get('/api/test');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            test: 'is working as it should',
        });
    });
});
