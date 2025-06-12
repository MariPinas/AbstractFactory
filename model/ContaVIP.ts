import { ContaUsuario } from "./ContaUsuario";

export class ContaVIP implements ContaUsuario {
  email: string;
  senha: string;

  constructor(email: string, senha: string) {
    this.email = email;
    this.senha = senha;
  }

  criar() {
    return { tipo: "vip", dados: {} };
  }

  getTipo() {
    return "Conta VIP";
  }
}
