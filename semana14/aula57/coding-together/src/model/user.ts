export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export const toUserRoles = (value: string) => {
   switch (value) {
      case "NORMAL":
         return USER_ROLES.NORMAL
      case "ADMIN":
         return USER_ROLES.ADMIN
      default:
         // return USER_ROLES.NORMAL
         throw new Error("Valid user roles are 'NORMAL' and 'ADMIN'")
   }
}

export type authenticationData = {
   id: string,
   role: USER_ROLES
}

export class User {
   private id: string;
   private name: string;
   private nickname: string;
   private email: string;
   private password: string;
   private role: USER_ROLES;

   constructor(
      id: string,
      name: string,
      nickname: string,
      email: string,
      password: string,
      role: USER_ROLES
      ){
      this.id = id;
      this. name = name;
      this.nickname = nickname;
      this.email = email;
      this.password = password;
      this.role = role;
      }

   getID () {
      return this.id
   }
   getName () {
      return this.name
   }
}

const user1 = new User("1", "angelo","avs","a@a","123123", USER_ROLES.NORMAL)

user1.getID()

export type userData = {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export type user = userData & { id: string }

export const toUserModel = (
   input: any
): user => {
   return {
      id: input.id,
      name: input.name,
      nickname: input.nickname,
      email: input.email,
      password: input.password,
      role: toUserRoles(input.role)
   }
}

// export type loginDTO = {
//    email: any
//    password: any
// }

// export type userCredentials = {
//    email:string
//    password:string
// }