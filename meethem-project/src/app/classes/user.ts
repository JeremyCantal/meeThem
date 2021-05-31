import { Post } from "./post";

export class User {
    userid!: number;
    name!: string;
    lastname!: string;
    email!: string;
    password!: string;
    posts!:Post[];
}
