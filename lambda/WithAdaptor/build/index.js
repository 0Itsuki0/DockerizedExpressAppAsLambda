"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const child_process_1 = require("child_process");
const util_1 = require("util");
const execAsync = (0, util_1.promisify)(child_process_1.exec);
const LIBRE_OFFICE_BIN = "/usr/bin/libreoffice";
const TEMP_FOLDER_PAHT = "/tmp";
const MIME_PDF = "application/pdf";
const app = (0, express_1.default)();
app.use(express_1.default.raw({ type: '*/*' }));
const port = 3000;
app.post('/', async (req, res) => {
    res.status(200).send("Hello!");
});
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
// export const handler = serverlessExpress({ app });
