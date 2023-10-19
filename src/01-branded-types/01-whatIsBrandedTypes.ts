import { Brand } from "../helpers/Brand";

type Password = Brand<string, "Password">;
type Email = Brand<string, "Email">;

let passwordSlot: Password;

passwordSlot = "asdasd" as Password;

const verifyEmail = (email: Email) => {};

verifyEmail("asdasd" as Email);

type Dollar = Brand<number, "Dollar">;
type Euro = Brand<number, "Euro">;

const myDollar: Dollar = 10 as Dollar;

const myEuro: Euro = 20 as Euro;
