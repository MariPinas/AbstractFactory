import { ContaUsuario } from "./ContaUsuario";

export class ContaAdm implements ContaUsuario{
    email:string
    senha:string

    constructor(email:string, senha:string){
        this.email = email;
        this.senha = senha;
    }
    
    criar(){
        return { tipo: "Administrador", dados: {}};
    }
    getTipo(){
        return "Conta Administrador";
    }
}