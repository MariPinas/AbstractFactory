import { ContaUsuario } from "../model/ContaUsuario";

export abstract class ContaUsuarioFactory{
    email:string;
    senha:string;

    constructor(email:string, senha:string){
        this.email = email;
        this.senha = senha;
    }
    
    abstract criarConta(): ContaUsuario;
}