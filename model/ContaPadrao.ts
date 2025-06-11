import { ContaUsuario } from "./ContaUsuario";

export class ContaPadrao implements ContaUsuario{
    email:string
    senha:string

    constructor(email:string, senha:string){
        this.email = email;
        this.senha = senha;
    }

    criar(){
        return { tipo: "padrao", dados: {}};
    }
    getTipo(){
        return "Conta Padrão";
    }
}