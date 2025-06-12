import * as readline from "readline-sync";
import { LoginService } from "./login/LoginService";
import { ConcreteFactoryContaAdm } from "./factories/ConcreteFactoryContaAdm";
import { ConcreteFactoryContaPadrao } from "./factories/ConcreteFactoryContaPadrao";
import { ConcreteFactoryContaVIP } from "./factories/ConcreteFactoryContaVIP";
import { ContaUsuario } from "./model/ContaUsuario";

const contas: ContaUsuario[] = [];

contas.push(
  new ConcreteFactoryContaPadrao("bananaUser@email.com", "123").criarConta()
);
contas.push(
  new ConcreteFactoryContaAdm("admin@email.com", "admin").criarConta()
);
contas.push(
  new ConcreteFactoryContaVIP("vip@email.com", "vip123").criarConta()
);

const email = readline.question("Digite seu email: ");
const senha = readline.question("Digite sua senha: ", { hideEchoBack: true }); //senha = *****

const logou = LoginService.validaLogin(email, senha);

if (logou) {
  console.log("\nLogin bem-sucedido!");

  // Encontrar a conta
  const conta = contas.find((c) => c.email === email && c.senha === senha);

  if (conta) {
    console.log("Tipo da conta:", conta.getTipo());
  } else {
    console.log("Conta não encontrada.");
  }
} else {
  console.log("\nEmail ou senha inválidos.");
}
