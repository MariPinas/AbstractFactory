import { ContaPadrao } from "../model/ContaPadrao";
import { ContaUsuarioFactory } from "./ContaUsuarioFactory";

export class ConcreteFactoryContaPadrao extends ContaUsuarioFactory{
    criarConta(): ContaPadrao {
        return new ContaPadrao(this.email,this.senha);
    }
}