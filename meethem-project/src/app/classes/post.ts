import { Categorie } from "./categorie";

export class Post {
    postid!: number;
    catid!: number;
    userid!: number;
    categorie!: Categorie[];
    contenu!: string;
}
