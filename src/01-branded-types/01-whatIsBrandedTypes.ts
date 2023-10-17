import { Brand } from "../helper/Brand";

type Password = Brand<string, "Password">;
type Email = Brand<string, "Email">;

type UserObject = Brand<{ id: string; name: string }, "User">;

const user: UserObject = {
  id: "asdasd",
  name: "asdasd",
} as UserObject;

const password = "1231423" as Password;

const email = "mpocock@me.com" as Email;

const verifyPassword = (pass: Password) => {};

verifyPassword("asdasdas" as Password);

let passwordSlot: Password;

passwordSlot = "asdasdasdas" as Password;
