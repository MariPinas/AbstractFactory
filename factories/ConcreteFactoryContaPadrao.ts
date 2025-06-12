import { ContaPadrao } from "../model/ContaPadrao";
import { ContaUsuarioFactory } from "./ContaUsuarioFactory";
import { MockLogin } from "../login/MockLogin";
import { Login } from "../login/Login";

export class ConcreteFactoryContaPadrao extends ContaUsuarioFactory {
  criarConta(): ContaPadrao {
    const conta = new ContaPadrao(this.email, this.senha);
    MockLogin.users.push(new Login(this.email, this.senha));
    return conta;
  }
}
