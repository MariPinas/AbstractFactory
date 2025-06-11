import { ContaAdm } from "../model/ContaAdm";
import { ContaUsuarioFactory } from "./ContaUsuarioFactory";

export class ConcreteFactoryContaAdm extends ContaUsuarioFactory{
    criarConta(): ContaAdm {
        return new ContaAdm(this.email,this.senha);
    }
}