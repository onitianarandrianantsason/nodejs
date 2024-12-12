"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Etudiant = void 0;
const mongoose_1 = require("mongoose");
const SchemaEtudiant = new mongoose_1.Schema({
    nom: { type: String },
    prenom: { type: String },
});
exports.Etudiant = (0, mongoose_1.model)('etudiant', SchemaEtudiant);
