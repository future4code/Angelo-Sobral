import { USER_ROLES } from "../../src/model/User";

export class TokenGeneratorMock {
  public generate = (input: AuthenticationData): string => {
    return "tokenMock"
  };

  public verify(token: string) {
    return {
      id: "id-mock",
      role: USER_ROLES.NORMAL 
    }
  }
}

export interface AuthenticationData {
  id: string;
  role: string;
}

export default new TokenGeneratorMock()