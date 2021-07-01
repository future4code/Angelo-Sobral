import { User, USER_ROLES } from "../../src/model/User";
import { userMockAdmin, userMockNormal } from "./UserMock";

const userMock = new User (
   "123",
   "Angelo",
   "angelo@gmail.com",
   "123123",
   USER_ROLES.ADMIN
)

export class userDatabaseMock {

   public async createUser(user: User): Promise<void> {}

   public async getUserByEmail(email: string): Promise<User | undefined> {
      
      if (email === userMock.getEmail()) {
         return userMock
      } else {
         return undefined
      }

      // switch (email) {
      //    case "angelo@gmail.com":
      //       return userMockAdmin 
      //    case "teste@gmail.com":
      //       return userMockNormal
      //    default:
      //       return undefined
      // }
   }

   public async getUserById(id: string): Promise<User | undefined> {
      if (id === userMock.getId()) {
         return userMock
      } else {
         return undefined
      }

      // switch (id) {
      //    case "123":
      //       return userMockAdmin 
      //    case "321":
      //       return userMockNormal
      //    default:
      //       return undefined
      // }
   }

   public async getAllUsers(): Promise<User[]> {
      return [userMock]
      // return [userMockNormal, userMockAdmin]
   }
}

export default new userDatabaseMock()