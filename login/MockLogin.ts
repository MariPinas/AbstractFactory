import { Login } from "./login";


export class MockLogin {
    static users: Login[] = [
        new Login("banana", "123"),
        new Login("admin@email.com", "admin")
    ];
}
