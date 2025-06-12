import { ContaVIP } from "../model/ContaVIP";
import { ContaUsuarioFactory } from "./ContaUsuarioFactory";

export class ConcreteFactoryContaVIP extends ContaUsuarioFactory {
  criarConta(): ContaVIP {
    return new ContaVIP(this.email, this.senha);
  }
}
