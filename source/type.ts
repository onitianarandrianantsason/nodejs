import{Document, model, Schema} from "mongoose";

interface IEtudiant extends Document{
    nom : string;
    prenom : string;
}

const SchemaEtudiant = new Schema <IEtudiant>({
    nom : {type:String},
    prenom : {type: String},
})

export const Etudiant =  model<IEtudiant>('etudiant', SchemaEtudiant)

export interface Ietudiant {
    nom : string;
    prenom : string;
}
