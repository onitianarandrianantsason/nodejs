// importation express pour le serveur
import express, { Application,Request, Response } from "express";
import mongoose from 'mongoose';
import { Etudiant, Ietudiant } from "./type";

const app: Application = express();
const port = 8040;

//middleware
app.use(express.json());


//Router
//Get etudiants maka
app.get('/nom',async (req: Request, res:Response) =>{

    try {
        const etudiants = await allEtudiant()
        res.json({etudiants})
    } catch (error) {
        throw error;
        
        
    }

   
})


//Post Etudiant mandefa
app.post('/new/etudiant',(req:Request, res:Response)=>{

    const{nom , prenom} = req.body
    console.log(`nom:${nom},prenom:${prenom}`);

    const etudiant: Ietudiant = {
        nom : nom,
        prenom : prenom
    }
    try {
        save(etudiant);
        res.json({statut:"ok"})
    } catch (error) {
        throw error
        
    }
    

    
})

//Fonction pour insérer any@  database
const save = async (U:Ietudiant) => {
    try {
        const etudiant =  new Etudiant(U);
        await etudiant.save();
    } catch (error) {
        throw error;
        
    }

}


//Fonction pour récupérer
const allEtudiant = async () => {
    try {
        const etudiants = await Etudiant.find();
        return etudiants;
    } catch (error) {
        return 0 ;
         
    }
}


// Pour démarrer le serveur de l'API
const demarreServer = (app: Application) => {
  app.listen(port, () => {
    console.log(`Server lancé sur http://localhost${port}`);
  });
};

//Connection API ET DATABASE
const conectMongoDb = async () =>{
    try {
       await mongoose.connect("mongodb://127.0.0.1:27017/crud")
       console.log("conection mongodb réussie");
       
    } catch (error) {
        throw error
        
    }
}
demarreServer(app);
conectMongoDb();