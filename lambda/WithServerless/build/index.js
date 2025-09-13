"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const serverless_express_1 = __importDefault(require("@codegenie/serverless-express"));
const app = (0, express_1.default)();
app.use(express_1.default.raw({ type: '*/*' }));
const port = 8080;
app.get('/', async (_, res) => {
    res.status(200).send("Hello!");
});
exports.handler = (0, serverless_express_1.default)({ app });
