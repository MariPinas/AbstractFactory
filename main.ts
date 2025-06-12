import { LoginService } from "./login/LoginService";
import { ConcreteFactoryContaAdm } from "./factories/ConcreteFactoryContaAdm";
import { ConcreteFactoryContaPadrao } from "./factories/ConcreteFactoryContaPadrao";
import * as readline from "readline-sync";

const fabricaContaPadrao = new ConcreteFactoryContaPadrao("banana", "123");
fabricaContaPadrao.criarConta();

const fabricaContaAdm = new ConcreteFactoryContaAdm("admin@email.com", "admin");
fabricaContaAdm.criarConta();

console.log("=== LOGIN ===");
const email = readline.question("Digite seu email: ");
const senha = readline.question("Digite sua senha: ", { hideEchoBack: true });

const logou = LoginService.validaLogin(email, senha);

if (logou) {
  console.log("\nLogou com sucesso, Bem-vindo(a)!");
} else {
  console.log("\nLogin inválido. Tente novamente.");
}
