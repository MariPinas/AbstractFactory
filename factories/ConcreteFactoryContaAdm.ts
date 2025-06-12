import { ContaAdm } from "../model/ContaAdm";
import { ContaUsuarioFactory } from "./ContaUsuarioFactory";
import { MockLogin } from "../login/MockLogin";
import { Login } from "../login/Login";

export class ConcreteFactoryContaAdm extends ContaUsuarioFactory {
  criarConta(): ContaAdm {
    const conta = new ContaAdm(this.email, this.senha);
    MockLogin.users.push(new Login(this.email, this.senha));
    return conta;
  }
}
