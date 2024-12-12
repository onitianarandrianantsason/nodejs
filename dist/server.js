"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importation express pour le serveur
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const type_1 = require("./type");
const app = (0, express_1.default)();
const port = 8040;
//middleware
app.use(express_1.default.json());
//Router
//Get etudiants maka
app.get('/nom', async (req, res) => {
    try {
        const etudiants = await allEtudiant();
        res.json({ etudiants });
    }
    catch (error) {
        throw error;
    }
});
//Post Etudiant mandefa
app.post('/new/etudiant', (req, res) => {
    const { nom, prenom } = req.body;
    console.log(`nom:${nom},prenom:${prenom}`);
    const etudiant = {
        nom: nom,
        prenom: prenom
    };
    try {
        save(etudiant);
        res.json({ statut: "ok" });
    }
    catch (error) {
        throw error;
    }
});
//Fonction pour insérer any@  database
const save = async (U) => {
    try {
        const etudiant = new type_1.Etudiant(U);
        await etudiant.save();
    }
    catch (error) {
        throw error;
    }
};
//Fonction pour récupérer
const allEtudiant = async () => {
    try {
        const etudiants = await type_1.Etudiant.find();
        return etudiants;
    }
    catch (error) {
        return 0;
    }
};
// Pour démarrer le serveur de l'API
const demarreServer = (app) => {
    app.listen(port, () => {
        console.log(`Server lancé sur http://localhost${port}`);
    });
};
//Connection API ET DATABASE
const conectMongoDb = async () => {
    try {
        await mongoose_1.default.connect("mongodb://127.0.0.1:27017/crud");
        console.log("conection mongodb réussie");
    }
    catch (error) {
        throw error;
    }
};
demarreServer(app);
conectMongoDb();
