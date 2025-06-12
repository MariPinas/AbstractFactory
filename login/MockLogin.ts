import { Login } from "./Login";

export class MockLogin {
  static users: Login[] = [
    new Login("bananaUser@email.com", "123"),
    new Login("admin@email.com", "admin"),
  ];
}
