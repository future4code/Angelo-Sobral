import { User, USER_ROLES } from "../../src/model/User";

export const userMockAdmin = new User (
    "123",
    "Angelo",
    "angelo@gmail.com",
    "123123",
    USER_ROLES.ADMIN
)

export const userMockNormal = new User (
    "321",
    "teste",
    "teste@gmail.com",
    "123123",
    USER_ROLES.NORMAL
 )