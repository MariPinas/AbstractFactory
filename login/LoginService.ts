import { MockLogin } from "./MockLogin";

export class LoginService {
    static validaLogin(email: string, senha: string): boolean {
        return MockLogin.users.some(user =>
            user.email === email && user.senha === senha
        );
    }
}
