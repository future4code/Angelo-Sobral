import {UserBusiness} from "../src/business/UserBusiness"
import { UserDatabase } from "../src/data/UserDatabase"
import hashGeneratorMock from "./mocks/hashGeneratorMock"
import idGeneratorMock from "./mocks/idGeneratorMock"
import tokenGeneratorMock from "./mocks/tokenGeneratorMock"
import userDatabaseMock from "./mocks/UserDatabaseMock"

const userBusinessMock = new UserBusiness(
    idGeneratorMock, 
    hashGeneratorMock, 
    userDatabaseMock as UserDatabase, 
    tokenGeneratorMock)

describe("UserBusiness", () => {
    describe("Signup", () => {
        test("Should catch error when name is empty", async () => {
            expect.assertions(2)

            try {
                await userBusinessMock.signup("","angelo@gmail.com", "123123", "ADMIN")
            } catch (error) {
                expect(error.statusCode).toBe(422),
                expect(error.message).toBe("Missing input")
            }
        })

        test("Should catch error when email is invalid", async () => {
            expect.assertions(2)

            try {
                await userBusinessMock.signup("angelo","angelogmail.com", "123123", "ADMIN")
            } catch (error) {
                expect(error.statusCode).toBe(422),
                expect(error.message).toBe("Invalid email")
            }
        })

        test("Should catch error when password is invalid", async () => {
            expect.assertions(2)

            try {
                await userBusinessMock.signup("Angelo","angelo@gmail.com", "1234", "ADMIN")
            } catch (error) {
                expect(error.statusCode).toBe(422),
                expect(error.message).toBe("Invalid password")
            }
        })

        test("Should catch error when role is invalid", async () => {
            expect.assertions(2)
            
            try {
                await userBusinessMock.signup("Angelo","angelo@gmail.com", "123123", "GUEST")
            } catch (error) {
                expect(error.statusCode).toBe(422),
                expect(error.message).toBe("Invalid user role")
            }
        })

        test("Should return access token on secessfull signup ", async () => {
            expect.assertions(1)
            
            try {
                const {accessToken} = await userBusinessMock.signup(
                    "Angelo",
                    "angelo@gmail.com", 
                    "123123", 
                    "ADMIN"
                    )

                expect(accessToken).toBe("tokenMock")
            } catch (error) {
                console.log(error.message)
            }
        })
    })

    describe("login", () => {
        test("Should catch error when email isn´t registred", async () => {
            expect.assertions(2)

            try {
                await userBusinessMock.login("angelo@hotmail.com","123123")
            } catch (error) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Invalid credentials")
            }
        })

        test("Should catch error when password is invalid", async () => {
            expect.assertions(2)

            try {
                await userBusinessMock.login("angelo@gmail.com","1231235")
            } catch (error) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Invalid credentials")
            }
        })

        test("Should return access token on sucessfull login", async () => {

            try {
                const { accessToken } = await userBusinessMock.login("angelo@gmail.com","123123")

                expect(accessToken).toBe("tokenMock")
            } catch (error) {
                console.log(error.message)
            }
        })
    })

    describe("getUserById", () =>{
        test("Error if user not exist", async () => {
            expect.assertions(2)

            try {
                await userBusinessMock.getUserById("888")                
            } catch (error) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Not found")
            }
        })

        test("Return user if everything is rigth", async () => {
            expect.assertions(2)

            try {
                const getUserById = jest.fn(
                    (id:string) => userBusinessMock.getUserById(id)
                )
                const result = await getUserById("123")  
                
                expect(getUserById).toHaveBeenCalledWith("123")
                expect(result).toEqual({
                    id: result.id ,
                    name: result.name,
                    email: result.email,
                    role: result.role
                })
            } catch (error) {
                console.log(error.message)
            }
        })
    })
})