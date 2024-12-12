// importation express pour le serveur
import express, { Application } from "express";

const app: Application = express();
const port = 8040;

const demarreServer = (app: Application) => {
  app.listen(port, () => {
    console.log(`Server lancé sur http://localhost${port}`);
  });
};
demarreServer(app);
