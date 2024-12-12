"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importation express pour le serveur
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8040;
const demarreServer = (app) => {
    app.listen(port, () => {
        console.log(`Server lancé sur http://localhost${port}`);
    });
};
demarreServer(app);
