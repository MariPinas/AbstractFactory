import { LoginService } from "./login/LoginService";
import { ConcreteFactoryContaAdm } from "./factories/ConcreteFactoryContaAdm";
import { ConcreteFactoryContaPadrao } from "./factories/ConcreteFactoryContaPadrao";

const fabricaContaPadrao = new ConcreteFactoryContaPadrao("banana", "123");
const contaPadrao = fabricaContaPadrao.criarConta().criar();

const fabricaContaAdm = new ConcreteFactoryContaAdm("banana", "123");
const contaAdm = fabricaContaAdm.criarConta().criar();

const logou = LoginService.validaLogin("banana", "12");

console.log("Login bem-sucedido?", logou);
console.log("Conta Padrão:", contaPadrao);
console.log("Conta Administrador:", contaAdm);
